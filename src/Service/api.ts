// /services/api.ts

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://numerloogy-backend.onrender.com/api";

// ================= TYPES =================

export interface ConsultationData {
  fullName: string;
  email: string;
  phone: string;
  dob: string;
  gender?: string;
  birthPlace?: string;
  concern?: string;
}

export interface ContactData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface SubscribeData {
  email: string;
}

export interface ModalData {
  fullName: string;
  email: string;
  phone: string;
  dob: string;
  birthPlace: string;
}

// ================= GENERIC POST =================

export async function postData<T>(endpoint: string, data: T) {
  const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  let result;

  // ✅ SAFE JSON PARSE (prevents crash)
  try {
    result = await response.json();
  } catch {
    throw new Error("Server error: Invalid response from server");
  }

  // ✅ HANDLE API ERRORS
  if (!response.ok) {
    throw new Error(result?.message || "Something went wrong");
  }

  return result;
}

// ================= REPORT API =================

export async function generateReport(data: ConsultationData) {
  const response = await fetch(`${API_BASE_URL}/reports`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    let errorMessage = "Something went wrong";

    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorMessage;
    } catch {}

    throw new Error(errorMessage);
  }

  return response.blob();
}

// ================= CONTACT API =================

export async function sendContact(data: ContactData) {
  return postData("contact", data);
}

// ================= SUBSCRIBE API =================

export async function subscribeUser(data: SubscribeData) {
  return postData("subscribe", data);
}

// ================= MODAL API (FIXED) =================

export async function submitModal(data: ModalData) {
  return postData("modal", {
    fullName: data.fullName,
    email: data.email,
    phone: data.phone,
    dob: data.dob,
    birthPlace: data.birthPlace,
  });
}