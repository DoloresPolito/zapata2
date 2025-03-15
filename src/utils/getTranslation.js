import es from "@/locales/es.json";
import en from "@/locales/en.json";

const translations = { es, en };

export function getTranslation(locale, key) {
  const keys = key.split("."); // Permite acceder a claves anidadas como "contact.title"
  let result = translations[locale];

  for (const k of keys) {
    result = result?.[k];
    if (!result) return key; // Si la clave no existe, devuelve el key como fallback
  }

  return result;
}