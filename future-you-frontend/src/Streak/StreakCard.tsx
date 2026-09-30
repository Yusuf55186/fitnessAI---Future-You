import { Card } from "../components/ui/Card/Card";
import { translations } from "../il8n/translations";
import type { language } from "../types/language"
import type { WorkoutSession } from "../types/workout/workout";

type Props = {
    language:language;
    sessions: WorkoutSession[];
}
export const StreakCard = ({language,sessions}:Props) => {
    const today = new Date();
    today.setDate(today.getDate() - 1);
    
    const checkDate = new Date(today);

    const formatDate = (date:Date) => {
       const year = date.getFullYear();
       const month = (date.getMonth() + 1).toString().padStart(2,"0");
       const day = date.getDate().toString().padStart(2,"0");
       return `${year}-${month}-${day}`;
    }
    let dateKey = formatDate(checkDate);
    let hasWorkout = sessions.some((session) => session.date === dateKey);
    let streakCounter = 0;
    if (!hasWorkout){
            checkDate.setDate(checkDate.getDate() -1)
            dateKey = formatDate(checkDate);
                hasWorkout = sessions.some((session) => session.date === dateKey)
    }
    while (hasWorkout) {
    streakCounter++
    checkDate.setDate(checkDate.getDate() -1)
    dateKey = formatDate(checkDate);
    hasWorkout = sessions.some((session) => session.date === dateKey)

    
    }
   
    return (
        <div className="relative mx-auto mb-10 w-full max-w-xl streak-card-show">

    {/* External glow */}
    <div
        className="
            pointer-events-none
            absolute
            inset-x-8
            -inset-y-3
            rounded-2xl
            bg-fy-accent
            opacity-15
            blur-3xl
            streak-glow-show
        "
    />

    <Card
        className="
            relative
            min-h-[220px]
            w-full
            overflow-hidden
            border-fy-accent/30
            px-8
            py-7
        "
    >
        {/* Internal ambient light */}
        <div
            className="
                pointer-events-none
                absolute
                -right-16
                -top-20
                h-48
                w-48
                rounded-full
                bg-fy-accent/10
                blur-3xl
            "
        />

        <div className="relative flex h-full items-center gap-6">

            {/* Ordinary People mascot */}
            <div
                className="
                    streak-devil-show
                    flex
                    h-24
                    w-24
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-fy-accent/30
                    bg-fy-bg
                    text-5xl
                "
            >
                😈
            </div>

            <div className="streak-content-show min-w-0 flex-1">

                <div className="mb-2 flex items-center gap-2">
                    <span
                        className="
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.2em]
                            text-fy-accent
                        "
                    >
                        Current Streak
                    </span>

                    <span className="h-1 w-1 rounded-full bg-fy-accent" />

                    <span className="text-xs text-fy-muted">
                        Future You
                    </span>
                </div>

                <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-black text-fy-text">
                       {streakCounter}
                    </span>

                    <span className="text-lg font-semibold text-fy-muted">
                        days
                    </span>
                </div>

                <p className="mt-3 max-w-sm text-sm text-fy-muted">
                    {streakCounter}? Oke... misschien ben je toch niet helemaal nutteloos.
                </p>

            </div>

            <div
                className="
                    hidden
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-fy-accent/30
                    bg-fy-accent/10
                    text-xl
                    sm:flex
                "
            >
                🔥
            </div>

        </div>

        <div className="relative mt-6 h-px overflow-hidden bg-fy-border">
            <div className="h-full w-2/3 bg-fy-accent" />
        </div>

    </Card>
</div>
);
}