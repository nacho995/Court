
export enum BookingStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED',
}

export class Booking {
  id: number;
  memberId: number;
  courtId: number;
  startTime: Date;
  endTime: Date;
  Status: BookingStatus;
}