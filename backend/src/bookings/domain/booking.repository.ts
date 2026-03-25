import { Booking } from './booking.entity';
import { CreateBookingDto } from '../infrastructure/dto/create-booking.dto';

export interface BookingRepository {
  findAll(): Promise<Booking[]>;
  create(data: CreateBookingDto): Promise<Booking>;
}
