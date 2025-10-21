import { OpenAI } from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

/**
 * Check if a number is even using ChatGPT
 */
export async function isEvenAI(n: number): Promise<boolean> {
  const prompt = `Is the number ${n} even? Reply with "yes" or "no".`;

  const res = await openai.chat.completions.create({
    model: "gpt-4o",
    temperature: 0,
    messages: [
      { role: "system", content: "Respond only with 'yes' or 'no'." },
      { role: "user", content: prompt },
    ],
  });

  const answer = res.choices[0].message.content?.trim().toLowerCase();

  if (answer === "yes") return true;
  if (answer === "no") return false;

  throw new Error(`Unexpected response: ${answer}`);
}