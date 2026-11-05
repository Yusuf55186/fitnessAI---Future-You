import type { language } from "../types/language"
type Props = {
    language:language,
    username:string,
    arabicName:string | null;
}
export const DisplayName = ({language,username,arabicName}:Props) => {
    if (language === 'arz' && arabicName){
        return arabicName
    }
    return {
        username
    } 
}