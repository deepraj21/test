export function parseJson(raw) {
  return JSON.parse(raw);
}

export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
