// netlify/functions/fetchNews.js

import fetch from "node-fetch"; // Node fetch for serverless function

export async function handler(event, context) {
  const { search, country, category, page } = event.queryStringParameters || {};
  const API_KEY = "cf93adbc461d829a05e162ae825e66f0"; // GNews API key
  const pageSize = 9;

  let url = "";

  if (search) {
    url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(
      search
    )}&token=${API_KEY}&lang=en&max=${pageSize}&page=${page || 1}`;
  } else {
    url = `https://gnews.io/api/v4/top-headlines?token=${API_KEY}&lang=en&max=${pageSize}&country=${
      country || "us"
    }&topic=${category || ""}&page=${page || 1}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch news", details: error }),
    };
  }
}
