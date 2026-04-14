
import { GoogleGenAI } from "@google/genai";
import 'dotenv/config';
import readlineSync from "readline-sync";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function main() {
  const chat = ai.chats.create({
    model: "gemini-2.5-flash",
    history: [],
  });

  while (true) {
    const question = readlineSync.question("Ask me Question: ");

    if (question === 'exit') break;

    const response = await chat.sendMessage({
      message: question,
    });

    console.log("Response:", response.text);
  }
}

await main();