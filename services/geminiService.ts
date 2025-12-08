import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateRealEstateResponse = async (userMessage: string, chatHistory: string[]): Promise<string> => {
  try {
    const historyContext = chatHistory.length > 0 
      ? `Vorheriger Gesprächsverlauf:\n${chatHistory.join('\n')}\n` 
      : "";

    const systemPrompt = `
      Du bist ein hilfreicher und professioneller virtueller Assistent für 'Kumar Immobilien', ein Immobilienunternehmen in Niederlenz, Schweiz.
      Dein Ziel ist es, potenzielle Kunden freundlich zu begrüßen und einfache Fragen zu Immobilien, Kauf, Verkauf oder Bewertung zu beantworten.
      
      Wichtige Informationen über das Unternehmen:
      - Name: Kumar Immobilien
      - Geschäftsleiter: Herr Kumar
      - Ort: 5702 Niederlenz
      - Dienstleistungen: Verkauf, Kauf, Immobilienbewertung.
      
      Verhaltensregeln:
      1. Antworte immer höflich und professionell auf Deutsch.
      2. Halte die Antworten kurz und prägnant (maximal 3-4 Sätze).
      3. Wenn eine Frage zu spezifisch ist (z.B. konkrete Preise für ein nicht genanntes Objekt, rechtliche Beratung), rate dem Nutzer, Herrn Kumar direkt zu kontaktieren (Tel: 079 313 78 21 oder Email: Kumar.Immobilien@gmail.com).
      4. Versuche, den Nutzer dazu zu ermutigen, einen Termin zu vereinbaren.
      
      Benutzerfrage: "${userMessage}"
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: historyContext + systemPrompt,
    });

    return response.text || "Entschuldigung, ich konnte das nicht verarbeiten.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Es tut mir leid, es gab einen technischen Fehler. Bitte versuchen Sie es später erneut.";
  }
};