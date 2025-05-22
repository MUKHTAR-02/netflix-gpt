// src/utils/cohere.js

export const getMovieRecommendations = async (userQuery) => {
  const response = await fetch("https://api.cohere.ai/v1/chat", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.REACT_APP_COHERE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "command-r-plus", // recommended model name as of 2025
      message: `Act as a movie recommendation system. Suggest 6 movies based on: "${userQuery}". Respond with just the names, comma-separated.`,
    }),
  });

  if (!response.ok) {
    throw new Error("Cohere API call failed");
  }

  const data = await response.json();
  return data.text; // 'text' field contains the chat response
};
