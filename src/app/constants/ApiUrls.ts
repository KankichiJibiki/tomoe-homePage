export class ApiUrls {
    //* Reservation CRUD api
    static readonly RESERVATION_URL: string = "/Reservation";
        static readonly     RESERVATION_ACTION_RESERVE: string = "/Reserve";
        static readonly RESERVATION_ACTION_RESTRICTED: string = "/GetRestrictedDates";

    //* Instagram api
    static readonly INSTAGRAM_URL: string = "/Instagram";
        static readonly INSTAGRAM_ACTION_GETPOST: string = "/Getposts";

    //* Image api
    static readonly IMAGE_URL: string = "/Image";
        static readonly IMAGE_ACTION_GETIMAGE: string = "/GetImageList";

    //* S3 Prefixes
    static readonly BUCKETNAME: string = "tomoe-image-storage";
    static readonly MAIN: string = "main-page";
    static readonly DRINK: string = "drink-page";
    static readonly DISH: string = "dish-page";
    static readonly MAP: string = "map-page";
    static readonly RESERVATION: string = "reservation-page";
}