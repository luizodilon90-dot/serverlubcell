export async function handler(event, context) {
  try {
    const API_KEY = process.env.GSM_API_KEY;
    const USERNAME = process.env.GSM_USERNAME;

    // 🔥 Coloquei aqui os logs:
    console.log("API_KEY:", API_KEY);
    console.log("USERNAME:", USERNAME);

    const response = await fetch("https://gsmmanager.com/public/api/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": API_KEY,
        "user-name": USERNAME,
        "Origin": "https://serverlubcell.netlify.app"
      },
      body: "{}"
    });

    const text = await response.text();

    return {
      statusCode: 200,
      body: text
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
}
