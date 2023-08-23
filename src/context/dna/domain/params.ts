export interface AreCoordinatesValidProps {
  x: number;
  y: number;
  n: number;
}

export interface HasMutationInDirectionProps {
  dna: string[];
  x: number;
  y: number;
  dx: number;
  dy: number;
  patternLength?: number;
}
