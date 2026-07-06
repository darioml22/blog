// src/lib/storage.js
// Toda la persistencia del juego vive en localStorage (100% client-side,
// no necesitas backend ni base de datos para esto).

const KEY = "pvz-collection-v1";

/** Devuelve un array de ids ya recogidos. */
export function getCollected() {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

/** Marca un id como recogido. Devuelve true si era nuevo (no estaba ya). */
export function collect(id) {
  const current = getCollected();
  if (current.includes(id)) return false;
  current.push(id);
  localStorage.setItem(KEY, JSON.stringify(current));
  return true;
}

/** ¿Está recogido este id? */
export function isCollected(id) {
  return getCollected().includes(id);
}

/** ¿Se han recogido todos los ids de la lista dada? */
export function hasAll(allIds) {
  const current = getCollected();
  return allIds.every((id) => current.includes(id));
}

/** Utilidad de desarrollo: borra todo el progreso. */
export function resetCollection() {
  localStorage.removeItem(KEY);
}