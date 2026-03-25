import { Booking } from './booking.entity';

export interface BookingRepository {
  findAll(): Promise<Booking[]>;
  create(booking: Booking): Promise<Booking>;
}
