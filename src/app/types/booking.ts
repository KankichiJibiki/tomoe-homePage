import { Time } from "@angular/common";

export interface Booking{
    name: string,
    howMany: number | null,
    bookedDate : Date,
    bookedTime : string | Date,
    course: string,
    course_option: boolean | null,
    discription: string,
    email: string,
    phone: string,
    // dateForDisplay: string,
    // timeForDisplay: string,
}