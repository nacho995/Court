export enum MemberLevel {
  BEGINNER = 'BEGINNER',
  INTERMEDIATE = 'INTERMEDIATE',
  ADVANCED = 'ADVANCED',
  PRO = 'PRO',
}
export class Member {
  id: number;
  name: string;
  email: string;
  level: MemberLevel;
  createdAt: Date;
}
