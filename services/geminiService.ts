import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the Gemini AI client
const ai = new GoogleGenAI({ apiKey });

export const generateBlessing = async (childName: string): Promise<string> => {
  try {
    const prompt = `
      Escribe una bendición o frase corta, mágica y espiritual para el Bautizo y el 7° Cumpleaños de una niña llamada ${childName}.
      
      Reglas:
      1. Tono: Tierno, alegre, con un toque de fe y celebración de vida.
      2. Longitud: Máximo 35 palabras.
      3. Idioma: Español.
      4. No uses formato markdown.
      5. Menciona la luz, los ángeles o la alegría de crecer.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.9, // Creative
        topK: 40,
        maxOutputTokens: 100,
      }
    });

    const text = response.text;
    
    if (!text) {
      throw new Error("No text returned from Gemini");
    }

    return text.trim();
  } catch (error) {
    console.error("Error generating blessing:", error);
    throw new Error("Que la luz y la alegría te acompañen siempre en este día especial.");
  }
};