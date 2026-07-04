import { mkdir, readFile, rm, writeFile } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";
import type { ContactMessage, EmailLogEntry, Faq, Inquiry, InquiryStatus, Settings } from "@/lib/types";
import { defaultSettings } from "@/lib/site";
import { dataDir, uploadPath } from "@/lib/storage";

const defaultFaqs: Faq[] = [
  {
    id: "faq-milyen-autok",
    question: "Milyen autókat vásárolnak fel?",
    answer:
      "Használt, sérült, hibás, forgalomból kivont és normál állapotú autókat is megvizsgálunk. A lényeg, hogy a leírás és a képek alapján korrekt ajánlatot tudjunk adni.",
    createdAt: new Date("2026-01-01T00:00:00.000Z").toISOString()
  },
  {
    id: "faq-allapot",
    question: "Milyen állapotú autókat vásárolnak meg?",
    answer:
      "Működőképes és javításra szoruló autókkal is foglalkozunk. Hibák és problémák megadása opcionális, de segít pontosabb árat adni.",
    createdAt: new Date("2026-01-01T00:00:00.000Z").toISOString()
  },
  {
    id: "faq-ajanlat-ido",
    question: "Mennyi idő alatt kapok ajánlatot?",
    answer:
      "A beérkezett kérést rövid időn belül átnézzük, majd telefonon vagy e-mailben felvesszük a kapcsolatot az eladóval.",
    createdAt: new Date("2026-01-01T00:00:00.000Z").toISOString()
  },
  {
    id: "faq-fizetes",
    question: "Hogyan történik a fizetés?",
    answer:
      "Sikeres megállapodás után a fizetés gyorsan, átutalással vagy egyeztetett módon történik.",
    createdAt: new Date("2026-01-01T00:00:00.000Z").toISOString()
  },
  {
    id: "faq-papirok",
    question: "Kell-e papírokat előkészítenem?",
    answer:
      "Igen, a forgalmi engedély, törzskönyv és személyes okmányok felgyorsítják az ügyintézést. Ha valamelyik hiányzik, azt is jelezze előre.",
    createdAt: new Date("2026-01-01T00:00:00.000Z").toISOString()
  },
  {
    id: "faq-szallitas",
    question: "Hogyan történik az autó elszállítása?",
    answer:
      "Az elszállítást egyeztetett időpontban intézzük. Működésképtelen autó esetén is keresünk gyakorlati megoldást.",
    createdAt: new Date("2026-01-01T00:00:00.000Z").toISOString()
  }
];

async function ensureDataDir() {
  await mkdir(dataDir, { recursive: true });
}

async function readJson<T>(fileName: string, fallback: T): Promise<T> {
  await ensureDataDir();
  const filePath = path.join(dataDir, fileName);

  try {
    const content = await readFile(filePath, "utf8");
    return JSON.parse(content) as T;
  } catch {
    await writeJson(fileName, fallback);
    return fallback;
  }
}

async function writeJson<T>(fileName: string, value: T) {
  await ensureDataDir();
  const filePath = path.join(dataDir, fileName);
  await writeFile(filePath, JSON.stringify(value, null, 2), "utf8");
}

export async function getSettings(): Promise<Settings> {
  const settings = await readJson<Partial<Settings>>("settings.json", defaultSettings);
  return { ...defaultSettings, ...settings };
}

export async function saveSettings(settings: Settings) {
  await writeJson("settings.json", settings);
}

export async function getFaqs(): Promise<Faq[]> {
  return readJson<Faq[]>("faqs.json", defaultFaqs);
}

export async function addFaq(question: string, answer: string) {
  const faqs = await getFaqs();
  faqs.unshift({
    id: randomUUID(),
    question,
    answer,
    createdAt: new Date().toISOString()
  });
  await writeJson("faqs.json", faqs);
}

export async function updateFaq(id: string, question: string, answer: string) {
  const faqs = await getFaqs();
  await writeJson(
    "faqs.json",
    faqs.map((faq) => (faq.id === id ? { ...faq, question, answer } : faq))
  );
}

export async function deleteFaq(id: string) {
  const faqs = await getFaqs();
  await writeJson(
    "faqs.json",
    faqs.filter((faq) => faq.id !== id)
  );
}

export async function getInquiries(): Promise<Inquiry[]> {
  return readJson<Inquiry[]>("inquiries.json", []);
}

export async function addInquiry(inquiry: Inquiry) {
  const inquiries = await getInquiries();
  inquiries.unshift(inquiry);
  await writeJson("inquiries.json", inquiries);
}

export async function updateInquiryStatus(id: string, status: InquiryStatus) {
  const inquiries = await getInquiries();
  await writeJson(
    "inquiries.json",
    inquiries.map((inquiry) => (inquiry.id === id ? { ...inquiry, status } : inquiry))
  );
}

export async function deleteInquiry(id: string) {
  const inquiries = await getInquiries();
  await writeJson(
    "inquiries.json",
    inquiries.filter((inquiry) => inquiry.id !== id)
  );

  const uploadDir = uploadPath("inquiries", id);
  await rm(uploadDir, { recursive: true, force: true });
}

export async function getContactMessages(): Promise<ContactMessage[]> {
  return readJson<ContactMessage[]>("contact-messages.json", []);
}

export async function addContactMessage(message: ContactMessage) {
  const messages = await getContactMessages();
  messages.unshift(message);
  await writeJson("contact-messages.json", messages);
}

export async function addEmailLog(entry: Omit<EmailLogEntry, "id" | "createdAt">) {
  const logs = await readJson<EmailLogEntry[]>("email-log.json", []);
  logs.unshift({
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    ...entry
  });
  await writeJson("email-log.json", logs.slice(0, 100));
}
