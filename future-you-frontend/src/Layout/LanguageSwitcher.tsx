import type { language } from "../types/language";
type LanguageOption = {
    label: string,
    value:language,
}
type Props = {
    language:language;
    setLanguage:(language:language) =>void;
}
export const LanguageSwitcher = ({language,setLanguage}:Props) => {
    const languages: LanguageOption[] = [
        {label:"NL",value:"nl"},
        {label:"EN",value:"en"},
        {label: "مصري",value:"arz"},
    ]    
    return (
        <div>
        {languages.map((lang) => {
            return (
                
                <button 
                        onClick={() => setLanguage(lang.value)}

                key={lang.label} className={
                    
                    lang.value == language
                    ? "bg-fy-accent text-fy-text-on-accent"
                                : "text-fy-text-muted"
                    }
                    
                    >
                        {lang.label}
                        
                   
                    
                    </button>
                    
            )
        })}
        </div>
    )
}
        
      
    
    