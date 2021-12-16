export const formatPrint = (msg, { color = "red", fontWeight = "bold" } = {}) =>
  console.log(`%c${msg}`, `color: ${color}; font-weight: ${fontWeight}`);

export const mota = (name = "hota") => {
  formatPrint(`${name} mota`);
};
