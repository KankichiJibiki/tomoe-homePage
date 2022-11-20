import { Time } from "@angular/common";

export interface Booking{
    name: string,
    howMany: number,
    bookedDate : Date,
    bookedTime : string,
    course: string,
    email: string,
    phone: string,
}