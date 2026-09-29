import { type WorkoutSession } from "../types/workout/workout"
import { type language } from "../types/language"
import { useState } from "react"
import { Button } from "../components/ui/Button/Button"
import { translations } from "../il8n/translations"

type Props = {
    sessions: Map<string,WorkoutSession[]>;
    language:language;
    selectedDate:string | null;
    onSelectDate:(date:string) => void
}
export const WorkoutCalender = ({language,sessions}:Props) => {
    const [currentDate,setCurrentDate] = useState<Date>(new Date());

    const currentMonth = currentDate.getMonth();
    
    const currentYear = currentDate.getFullYear();
    const daysInMonth = new Date(currentYear,currentMonth + 1, 0).getDate();
    const formattedMonth = (currentMonth + 1).toString().padStart(2,"0");
    const days = Array.from({ length:daysInMonth },(_, index) => index + 1 );
    const firstDayOfMonth = new Date(currentYear,currentMonth,1).getDay();
    const adjustedDay = (firstDayOfMonth + 6) % 7;
    const emptyDays = Array.from({ length:adjustedDay });
    const handleNextMonth = () => {
        setCurrentDate(new Date(currentYear,currentMonth + 1, 1))
    }
    const handlePreviousMonth = () => {
        setCurrentDate(new Date(currentYear,currentMonth - 1 ,1))
    }
    return (
        <>
        <div className="flex items-center justify-between mb-6">
    <Button
        variant="secondary"
        onClick={handlePreviousMonth}
        aria-label="Previous month"
    >
        ←
    </Button>

    <div className="text-center">
        <h2 className="text-xl font-semibold">
            {translations[language].monthNames[currentMonth]}{" "}
            {currentYear}
        </h2>
    </div>
    <div  className="grid grid-cols-7 gap-2 mb-2">
    {translations[language].dayNames.map((dayName) => {
        return (
            <div key={dayName} className="text-center text-sm text-fy-muted">{dayName}</div>
        )
    })}
    
  </div>
  <div className="grid grid-cols-7 gap-2">
    {emptyDays.map((_,index) => {
        return (
            <div key={index}>{}</div>
        )
    })}

    {days.map((day) => {
        const formattedday = day.toString().padStart(2,"0");
        const dateKey = `${currentYear}-${formattedMonth}-${formattedday}`;
        const daysessions = sessions.get(dateKey)
        return (
            <div key={day}>{day}</div>
            
        )
    })}
</div>

    <Button
        variant="secondary"
        onClick={handleNextMonth}
        aria-label="Next month"
    >
        →
    </Button>
</div>

        </>
    )

}

