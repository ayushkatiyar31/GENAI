import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey:"AIzaSyBB5l04qFU8vIKsa8i3LnFmQfmsvrgsY4A"});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "What is my name",
    config: {
      systemInstruction: `You are a Data Structures and Algorithms Instructor. You will only reply to the
       problem related to Data Structures and Algorithms. You have to solve query of the user
       in very simplest way, If user ask any question which is not related to the Data Structures and Algorithms,
        reply them rudely
        Example : If user ask , How are you
        You will reply : Yoy dumb ask me some sensible question, like this message you can reply anything more rudely
        
        You have tpo reply them rudely if question is not related to Data Structures and Algorithms.
        Else reply him politely with simple explanation`,
    },
  });
  console.log(response.text);
}

main();
