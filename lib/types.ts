export type Faq = {
  id: string;
  question: string;
  answer: string;
  createdAt: string;
};

export type Settings = {
  operatorName: string;
  operatorAddress: string;
  operatorTaxNumber: string;
  operatorRegistryNumber: string;
  businessEmail: string;
  publicEmail: string;
  phone: string;
  facebookUrl: string;
  tiktokUrl: string;
  instagramUrl: string;
  openingHours: string;
  serviceArea: string;
};

export type StoredFile = {
  name: string;
  url: string;
  size: number;
  type: string;
};

export type InquiryStatus = "new" | "seen" | "contacted" | "closed";

export type Inquiry = {
  id: string;
  createdAt: string;
  status: InquiryStatus;
  sellerName: string;
  sellerEmail: string;
  sellerPhone: string;
  carModel: string;
  carColor: string;
  carYear?: string;
  mileage?: string;
  fuel?: string;
  transmission?: string;
  condition?: string;
  carData?: string;
  problems?: string;
  carPhotos: StoredFile[];
  dataFiles: StoredFile[];
  emailDelivery: "sent" | "logged" | "failed";
};

export type ContactMessage = {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  emailDelivery: "sent" | "logged" | "failed";
};

export type EmailLogEntry = {
  id: string;
  createdAt: string;
  to: string;
  subject: string;
  text: string;
};
