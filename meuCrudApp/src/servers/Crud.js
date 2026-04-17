import { getApiUrl, resetApiUrl } from "./configApi";

export async function get() {
  try {
    const baseUrl = await getApiUrl();
    const response = await fetch(`${baseUrl}/1`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Bypass-Tunnel-Reminder": "true"
      }
    });
    return await response.json();
  } catch (error) {
    resetApiUrl();
    throw error;
  }
}

export async function create(item) {
  try {
    const baseUrl = await getApiUrl();
    const response = await fetch(`${baseUrl}/1`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Bypass-Tunnel-Reminder": "true"
      },
      body: JSON.stringify(item)
    });
    return await response.json();
  } catch (error) {
    resetApiUrl();
    throw error;
  }
}

export async function updatePerson(id, item) {
  try {
    const baseUrl = await getApiUrl();
    const response = await fetch(`${baseUrl}/1/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Bypass-Tunnel-Reminder": "true"
      },
      body: JSON.stringify(item)
    });
    return await response.json();
  } catch (error) {
    resetApiUrl();
    throw error;
  }
}

export async function deletePerson(id) {
  try {
    const baseUrl = await getApiUrl();
    await fetch(`${baseUrl}/1/${id}`, {
      method: "DELETE",
      headers: {
        "Bypass-Tunnel-Reminder": "true"
      }
    });
  } catch (error) {
    resetApiUrl();
    throw error;
  }
}