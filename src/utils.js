export function caesarCipher(text, shift) {
  return text
    .split("")
    .map((char) => {
      if (char.match(/[a-z]/i)) {
        let code = char.charCodeAt(0);
        let offset = code >= 65 && code <= 90 ? 65 : 97;
        return String.fromCharCode(((code - offset + shift) % 26) + offset);
      }
      return char;
    })
    .join("");
}
