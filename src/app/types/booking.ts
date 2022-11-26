import { Time } from "@angular/common";

export interface Booking{
    name: string,
    howMany: number | null,
    bookedDate : Date,
    bookedTime : string,
    course: string,
    option: boolean | null,
    discription: string,
    email: string,
    phone: string,
    dateForDisplay: string,
    timeForDisplay: string,
}