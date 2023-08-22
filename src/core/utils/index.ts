import { defaultPatternLength } from "../constants";
import { AreCoordinatesValidProps, HasMutationInDirectionProps } from "../types";

/**
 * Verifies if given coordinates are within the valid range of the DNA table.
 * @param x The x-coordinate
 * @param y The y-coordinate
 * @param n The size of the DNA table
 * @returns True if the coordinates are valid, otherwise false
 */
export function areCoordinatesValid({ x, y, n }: AreCoordinatesValidProps): boolean {
  const isValidIndexX = x >= 0 && x < n;
  const isValidIndexY = y >= 0 && y < n;
  return isValidIndexX && isValidIndexY;
}

/**
 * Checks for mutations in the given direction from the specified coordinates.
 * @param dna The DNA table
 * @param x The starting x-coordinate
 * @param y The starting y-coordinate
 * @param dx The x-direction of movement
 * @param dy The y-direction of movement
 * @param patternLength The length of the pattern
 * @returns True if a mutation is found, otherwise false
 */
export function hasMutationInDirection({
  dna,
  x,
  y,
  dx,
  dy,
  patternLength = defaultPatternLength,
}: HasMutationInDirectionProps): boolean {
  const target = dna[x][y];
  let count = 1;
  let newX = x + dx;
  let newY = y + dy;

  while (count < patternLength && areCoordinatesValid({ x: newX, y: newY, n: dna.length })) {
    const isNotMatchingTargetValue = dna[newX][newY] !== target;
    if (isNotMatchingTargetValue) break;
    count++;
    newX += dx;
    newY += dy;
  }

  return count >= patternLength;
}
