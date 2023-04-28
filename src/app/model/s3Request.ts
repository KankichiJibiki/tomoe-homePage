import { ApiUrls } from "../constants/ApiUrls";

export class S3Request{
    bucketName: string = ApiUrls.BUCKETNAME;
    prefix?: string = "";
    file?: File | null = null;
}