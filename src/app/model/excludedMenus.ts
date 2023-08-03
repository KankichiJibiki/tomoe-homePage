import { ExcludedMenuInterface } from "../interfaces/excludedMenuInterface";

export class ExcludedDishs{
    obonMenu: ExcludedMenuInterface = {
        name_jp: "お盆限定コース【涼風】",
        name_en: "Summer Course【涼風 - Suzukaze】",
        price_jp: "20,000(税込)",
        price_en: "20,000(Including tax)",
        image: "../../../assets/images/obon-course/course_menu.JPG",
        discription_jp: "8/11(金) ～ 8/16(水) 期間限定のお盆コースです。\n 前菜からデザートまで夏の旬物からなる献立となります。\n 和食巴の真剣な日本料理をご提供させていただきます。",
        discription_en: "Limited Summer Course, 8/11(Fry) to 8/16(Wed)\n Dishs that contain all summer ingredients served.\n Do not miss out!",
        start : new Date("2023-08-03"),
        end : new Date("2023-08-16"),
    }
}