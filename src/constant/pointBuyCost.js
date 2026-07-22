export const POINT_COST = {
  8: 0,
  9: 1,
  10: 2,
  11: 3,
  12: 4,
  13: 5,
  14: 7,
  15: 9
};

export function whatModifier(score) {
  return (Math.floor((score - 10) / 2));
}