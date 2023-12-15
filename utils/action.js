"use server";
import OpenAI from "openai";

const oepnai = new OpenAI({
  apiKey: process.env.OPEN_API_KEY,
});

export const generateChatResponse = async (chatMessage) => {
  const response = await oepnai.chat.completions.create({
    messages: [
      { role: "system", content: "you are a helpful assistant" },
      { role: "user", content: chatMessage },
    ],
    model: "gpt-3.5-turbo",
    temperature: 0,
  });
  console.log(response.choices[0].message);
  console.log(response);
  return "awesome";
};
