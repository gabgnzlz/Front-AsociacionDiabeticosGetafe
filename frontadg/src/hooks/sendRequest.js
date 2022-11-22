const headers = {
    accept: "application/json",
    "Content-Type": "application/json"
  };
  
  export default async function sendRequest({ url, method, body }) {
    const response = await fetch(url, {
      method,
      headers,
      body
    });
    if (!response.ok) {
      throw new Error(`Request failed with ${response.status}`);
    }
    const json = await response.json();
    return json;
  }