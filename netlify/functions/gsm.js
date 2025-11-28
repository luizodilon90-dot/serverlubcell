export async function handler(event, context) {
  try {
    const API_KEY = process.env.GSM_API_KEY;
    const USERNAME = process.env.GSM_USERNAME;

    const response = await fetch("https://gsmmanager.com/public/api/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": API_KEY,
        "user-name": USERNAME
      },
      body: "{}"
    });

    const json = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(json)
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
}
