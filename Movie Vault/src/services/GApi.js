import { GoogleGenAI } from "@google/genai";

const API_KEY = import.meta.env.VITE_API_KEY_Gemni;
const ai = new GoogleGenAI({ apiKey: API_KEY });

export default async function Main(movie) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `When I provide a movie name, first verify if it exists. If not, reply 'There is no such movie of this name.' If real, give: a 3-line plot with cinephile emojis like 🎥🎭, its IMDb or Rotten Tomatoes rating,  2 similar movies, and  a quick verdict like 'Must-watch!' or 'Skip it.' Never use asterisks (*) or invent facts and don't use qoutations. Example for 'The Dark Knight': '🦇 Batman battles the chaotic Joker in Gotham. 💥 Explosive action meets psychological depth. 🔥 Rating: 9.0/10. Like this? Try: Heat, Se7en. Verdict: Iconic—watch tonight! Movie name : ${movie}`,
  });
  console.log(response);
  return response.text;
}
