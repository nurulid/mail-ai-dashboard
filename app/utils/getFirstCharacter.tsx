export function getFirstCharacter(names: string) {
  return names
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");
}
