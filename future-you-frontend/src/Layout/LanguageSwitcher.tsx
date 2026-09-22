export const LanguageSwitcher = () => {
    const languages = ["NL", "EN", "مصري"];    
    return (
        <div>
        {languages.map((language) => {
            return (
                <button 
                key={language} className={
                    language == "NL"
                    ? "bg-fy-accent text-fy-text-on-accent"
                                : "text-fy-text-muted"
                    }
                    >
                    {language}
                    
                    </button>
            )
        })}
        </div>
    )
}
        
      
    
    