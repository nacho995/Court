export enum CourtType {
  TENNIS = 'TENNIS',
  SQUASH = 'SQUASH',
  PADDLE = 'PADDLE',
  BADMINTON = 'BADMINTON',
}
export enum Surface {
  CLAY = 'CLAY',
  GRASS = 'GRASS',
  HARD = 'HARD',
  SYNTHETIC = 'SYNTHETIC',
}
export class Court {
  id: number;
  name: string;
  type: CourtType;
  indoor: boolean;
  surface: Surface;
}
