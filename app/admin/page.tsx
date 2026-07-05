import type { Metadata } from "next";
import { Lock, LogOut, Mail, Save, Trash2 } from "lucide-react";
import { isAdminAuthenticated } from "@/lib/auth";
import { getContactMessages, getFaqs, getInquiries, getSettings } from "@/lib/db";
import { niceDate } from "@/lib/format";
import {
  changeInquiryStatus,
  createFaq,
  editFaq,
  loginAdmin,
  logoutAdmin,
  removeFaq,
  removeInquiry,
  updateSettings
} from "@/app/admin/actions";

export const metadata: Metadata = {
  title: "Admin",
  robots: {
    index: false,
    follow: false
  }
};

type AdminPageProps = {
  searchParams?: Promise<{ error?: string }>;
};

export default async function AdminPage({ searchParams }: AdminPageProps) {
  const authenticated = await isAdminAuthenticated();
  const params = searchParams ? await searchParams : {};

  if (!authenticated) {
    return (
      <section className="admin-login shell">
        <form action={loginAdmin} className="admin-login-card">
          <Lock size={44} />
          <h1>Admin belépés</h1>
          <p>A teszt jelszó: admin123. Éles oldalon állítsa be az ADMIN_PASSWORD környezeti változót.</p>
          {params.error && <span className="form-error">Hibás vagy lejárt admin hozzáférés.</span>}
          <label>
            Jelszó
            <input name="password" type="password" required placeholder="Admin jelszó" />
          </label>
          <button className="gold-button" type="submit">
            Belépés
          </button>
        </form>
      </section>
    );
  }

  const [settings, faqs, inquiries, messages] = await Promise.all([
    getSettings(),
    getFaqs(),
    getInquiries(),
    getContactMessages()
  ]);

  return (
    <section className="admin-page shell">
      <div className="admin-topbar">
        <div>
          <p className="eyebrow">Admin</p>
          <h1>Vezérlőpult</h1>
        </div>
        <form action={logoutAdmin}>
          <button className="ghost-button" type="submit">
            <LogOut size={18} />
            Kilépés
          </button>
        </form>
      </div>

      <div className="admin-stats">
        <article>
          <strong>{inquiries.length}</strong>
          <span>Ajánlatkérés</span>
        </article>
        <article>
          <strong>{messages.length}</strong>
          <span>Üzenet</span>
        </article>
        <article>
          <strong>{faqs.length}</strong>
          <span>GYIK elem</span>
        </article>
      </div>

      <section className="admin-section">
        <h2>Kapcsolati és e-mail beállítások</h2>
        <form action={updateSettings} className="admin-form settings-form">
          <label>
            Üzleti e-mail cím
            <input name="businessEmail" type="email" defaultValue={settings.businessEmail} required />
          </label>
          <label>
            Publikus e-mail cím
            <input name="publicEmail" type="email" defaultValue={settings.publicEmail} required />
          </label>
          <label>
            Telefonszám
            <input name="phone" defaultValue={settings.phone} required />
          </label>
          <label>
            Facebook oldal
            <input name="facebookUrl" type="url" defaultValue={settings.facebookUrl} />
          </label>
          <label>
            TikTok oldal
            <input name="tiktokUrl" type="url" defaultValue={settings.tiktokUrl} />
          </label>
          <label>
            Instagram oldal
            <input name="instagramUrl" type="url" defaultValue={settings.instagramUrl} />
          </label>
          <label>
            Nyitvatartás
            <input name="openingHours" defaultValue={settings.openingHours} />
          </label>
          <label>
            Szolgáltatási terület
            <input name="serviceArea" defaultValue={settings.serviceArea} />
          </label>
          <button className="gold-button" type="submit">
            <Save size={18} />
            Mentés
          </button>
        </form>
      </section>

      <section className="admin-section">
        <h2>Ajánlatkérések</h2>
        <div className="admin-list">
          {inquiries.length === 0 && <p className="muted">Még nincs beérkezett ajánlatkérés.</p>}
          {inquiries.map((inquiry) => (
            <article key={inquiry.id} className="admin-card inquiry-card">
              <div className="admin-card-head">
                <div>
                  <h3>{inquiry.carModel}</h3>
                  <p>{niceDate(inquiry.createdAt)}</p>
                </div>
                <div className="admin-card-actions">
                  <span className={`status-pill status-inquiry-${inquiry.status}`}>{inquiry.status}</span>
                  <span className={`status-pill status-${inquiry.emailDelivery}`}>{inquiry.emailDelivery}</span>
                </div>
              </div>
              <div className="inquiry-controls">
                <form action={changeInquiryStatus} className="status-form">
                  <input type="hidden" name="id" value={inquiry.id} />
                  <label>
                    Státusz
                    <select name="status" defaultValue={inquiry.status}>
                      <option value="new">Új</option>
                      <option value="seen">Megnézve</option>
                      <option value="contacted">Felvéve</option>
                      <option value="closed">Lezárva</option>
                    </select>
                  </label>
                  <button className="ghost-button compact" type="submit">
                    <Save size={16} />
                    Mentés
                  </button>
                </form>
                <form action={removeInquiry}>
                  <input type="hidden" name="id" value={inquiry.id} />
                  <button className="danger-button compact" type="submit">
                    <Trash2 size={16} />
                    Törlés
                  </button>
                </form>
              </div>
              <dl className="detail-grid">
                <div>
                  <dt>Eladó</dt>
                  <dd>{inquiry.sellerName || "-"}</dd>
                </div>
                <div>
                  <dt>Telefon</dt>
                  <dd>{inquiry.sellerPhone || "-"}</dd>
                </div>
                <div>
                  <dt>E-mail</dt>
                  <dd>{inquiry.sellerEmail || "-"}</dd>
                </div>
                <div>
                  <dt>Szín</dt>
                  <dd>{inquiry.carColor}</dd>
                </div>
                <div>
                  <dt>Évjárat</dt>
                  <dd>{inquiry.carYear || "-"}</dd>
                </div>
                <div>
                  <dt>Futott km</dt>
                  <dd>{inquiry.mileage || "-"}</dd>
                </div>
                <div>
                  <dt>Üzemanyag</dt>
                  <dd>{inquiry.fuel || "-"}</dd>
                </div>
                <div>
                  <dt>Váltó</dt>
                  <dd>{inquiry.transmission || "-"}</dd>
                </div>
              </dl>
              {(inquiry.carData || inquiry.problems) && (
                <div className="admin-note-grid">
                  <p>
                    <strong>Autó adatok:</strong>
                    {inquiry.carData || "-"}
                  </p>
                  <p>
                    <strong>Problémák:</strong>
                    {inquiry.problems || "-"}
                  </p>
                </div>
              )}
              {inquiry.carPhotos.length > 0 && (
                <div className="upload-preview-grid">
                  {inquiry.carPhotos.map((file) => (
                    <a key={file.url} href={file.url} target="_blank" rel="noreferrer">
                      <img src={file.url} alt={file.name} width={120} height={80} loading="lazy" />
                    </a>
                  ))}
                </div>
              )}
              {inquiry.dataFiles.length > 0 && (
                <div className="file-link-row">
                  {inquiry.dataFiles.map((file) => (
                    <a key={file.url} href={file.url} target="_blank" rel="noreferrer">
                      {file.name}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="admin-section">
        <h2>GYIK szerkesztés</h2>
        <form action={createFaq} className="admin-card admin-form">
          <label>
            Új kérdés
            <input name="question" required placeholder="Kérdés szövege" />
          </label>
          <label>
            Válasz
            <textarea name="answer" required rows={4} placeholder="Válasz szövege" />
          </label>
          <button className="gold-button" type="submit">
            Hozzáadás
          </button>
        </form>
        <div className="faq-admin-list">
          {faqs.map((faq) => (
            <article key={faq.id} className="admin-card faq-admin-card">
              <form action={editFaq} className="admin-form">
                <input type="hidden" name="id" value={faq.id} />
                <label>
                  Kérdés
                  <input name="question" defaultValue={faq.question} required />
                </label>
                <label>
                  Válasz
                  <textarea name="answer" defaultValue={faq.answer} rows={4} required />
                </label>
                <button className="ghost-button" type="submit">
                  <Save size={18} />
                  Mentés
                </button>
              </form>
              <form action={removeFaq}>
                <input type="hidden" name="id" value={faq.id} />
                <button className="danger-button" type="submit">
                  <Trash2 size={18} />
                  Törlés
                </button>
              </form>
            </article>
          ))}
        </div>
      </section>

      <section className="admin-section">
        <h2>Kapcsolati üzenetek</h2>
        <div className="admin-list">
          {messages.length === 0 && <p className="muted">Még nincs beérkezett kapcsolatfelvétel.</p>}
          {messages.map((message) => (
            <article key={message.id} className="admin-card">
              <div className="admin-card-head">
                <div>
                  <h3>{message.name}</h3>
                  <p>{niceDate(message.createdAt)}</p>
                </div>
                <span className={`status-pill status-${message.emailDelivery}`}>{message.emailDelivery}</span>
              </div>
              <p>
                <Mail size={16} />
                {message.email} {message.phone ? `• ${message.phone}` : ""}
              </p>
              <p>{message.message}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
