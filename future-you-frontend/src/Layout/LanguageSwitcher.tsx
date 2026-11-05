import type { language } from "../types/language";

type LanguageOption = {
    label: string;
    value: language;
};

type Props = {
    language: language;
    setLanguage: (language: language) => void;
};

export const LanguageSwitcher = ({ language, setLanguage }: Props) => {
    const languages: LanguageOption[] = [
        { label: "NL", value: "nl" },
        { label: "EN", value: "en" },
        { label: "مصري", value: "arz" },
    ];

    return (
        <div className="inline-flex items-center gap-1 rounded-xl border border-fy-border bg-fy-surface p-1">
            {languages.map((lang) => (
                <button
                    key={lang.value}
                    type="button"
                    onClick={() => setLanguage(lang.value)}
                    aria-pressed={language === lang.value}
                    className={`
                        rounded-lg px-4 py-2 text-sm font-semibold
                        transition-all duration-200
                        ${
                            language === lang.value
                                ? "bg-fy-accent text-fy-text-on-accent shadow-sm"
                                : "text-fy-text-muted hover:bg-fy-accent/10 hover:text-fy-text"
                        }
                    `}
                >
                    {lang.label}
                </button>
            ))}
        </div>
    );
};