import { GoogleGenAI, Type } from "@google/genai";
import { DailyContent, Language } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Using gemini-2.5-flash for speed and cost-effectiveness
const MODEL_NAME = "gemini-2.5-flash";

// Helper to get a cache key
const getCacheKey = (dateStr: string, language: Language) => `daily_content_${dateStr}_${language}`;

export const fetchDailyContent = async (language: Language, date: Date): Promise<DailyContent> => {
  const dateStr = date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const isoDate = date.toISOString().split('T')[0]; // YYYY-MM-DD
  
  // 1. Check Local Cache first to save API Quota
  const cacheKey = getCacheKey(isoDate, language);
  const cachedData = localStorage.getItem(cacheKey);
  
  if (cachedData) {
    try {
      // Return cached data immediately
      return JSON.parse(cachedData) as DailyContent;
    } catch (e) {
      localStorage.removeItem(cacheKey);
    }
  }

  const prompt = `
    Generate the Catholic Daily Mass Readings, a short spiritual reflection, and the Saint of the Day for ${dateStr} (ISO: ${isoDate}) in ${language} language.
    Ensure the readings are strictly from the Catholic Lectionary for this specific date in ${date.getFullYear()}.
    
    If the language is Hindi or Punjabi, translate the content appropriately and respectfully using religious terminology.
    
    IMPORTANT for Saint Image:
    The 'saint' object MUST include an 'englishName' field. This field must contain the standard English name of the saint (e.g., 'Saint Joseph', 'Saint Francis Xavier'), regardless of the output language. This is required to find accurate photos of the saint.
  `;

  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            date: { type: Type.STRING },
            reading1: {
              type: Type.OBJECT,
              properties: {
                source: { type: Type.STRING },
                text: { type: Type.STRING },
              }
            },
            psalm: {
              type: Type.OBJECT,
              properties: {
                source: { type: Type.STRING },
                text: { type: Type.STRING },
              }
            },
            gospel: {
              type: Type.OBJECT,
              properties: {
                source: { type: Type.STRING },
                text: { type: Type.STRING },
              }
            },
            reflection: { type: Type.STRING, description: "A paragraph of spiritual reflection on today's readings" },
            saint: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING, description: "Name of the saint in the requested language" },
                englishName: { type: Type.STRING, description: "Name of the saint in English (for image search)" },
                description: { type: Type.STRING },
              }
            }
          },
          required: ["date", "reading1", "psalm", "gospel", "reflection", "saint"]
        }
      }
    });

    if (response.text) {
      const data = JSON.parse(response.text) as DailyContent;
      // 2. Save to Cache on success
      try {
        localStorage.setItem(cacheKey, JSON.stringify(data));
      } catch (e) {
        console.warn("Storage full");
      }
      return data;
    }
    throw new Error("Empty response from AI");
  } catch (error) {
    console.error("Error fetching daily content:", error);
    // Fallback content in case of error/offline/quota limit
    return {
      date: dateStr,
      reading1: { source: "Offline Mode", text: "We are currently unable to fetch the readings. Please check your internet connection." },
      psalm: { source: "Psalm 23", text: "The Lord is my shepherd; I shall not want." },
      gospel: { source: "Holy Gospel", text: "For where two or three are gathered in my name, there am I among them." },
      reflection: "Take a moment of silence to pray for the Diocese and your loved ones.",
      saint: { name: "Simla Chandigarh Diocese", englishName: "Mary", description: "May the grace of our Lord Jesus Christ be with you." }
    };
  }
};