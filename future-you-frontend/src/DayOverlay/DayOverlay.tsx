import { Button } from "../components/ui/Button/Button";
import type { language } from "../types/language";
import type { WorkoutSession } from "../types/workout/workout";

type Props = {
    date:string;
    sessions:WorkoutSession[];
    language:language;
    onClose: () => void;
}
export const DayOverlay = ({date,sessions,language,onClose}:Props) => {
    
    return (
          <div
            className="
                fixed inset-0 z-50
                flex items-center justify-center
                bg-black/70
                backdrop-blur-sm
                px-4
                
            "
            onClick={onClose}
        >
            <div
                className="
                    relative
                    w-full max-w-2xl
                    overflow-hidden
                    rounded-2xl
                    border border-fy-border
                    bg-fy-surface
                    shadow-2xl
                    showWorkoutCard
                "
                onClick={(e) => e.stopPropagation()}
            >
                {/* Ambient accent */}
                <div
                    className="
                        pointer-events-none
                        absolute -right-20 -top-24
                        h-56 w-56
                        rounded-full
                        bg-fy-accent/10
                        blur-3xl
                    "
                />

                {/* Header */}
                <div
                    className="
                        relative
                        flex items-start justify-between
                        border-b border-fy-border
                        px-6 py-5
                        
                    "
                >
                    <div>
                        <p
                            className="
                                mb-1
                                text-xs font-bold uppercase
                                tracking-[0.2em]
                                text-fy-accent
                            "
                        >
                            Workout History
                        </p>

                        <h2 className="text-2xl font-bold text-fy-text">
                            {date}
                        </h2>

                        <p className="mt-1 text-sm text-fy-muted">
                            {sessions.length} workout{sessions.length !== 1 ? "s" : ""}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            flex h-10 w-10
                            items-center justify-center
                            rounded-lg
                            border border-fy-border
                            text-fy-muted
                            transition
                            hover:border-fy-accent/50
                            hover:text-fy-text
                        "
                        aria-label="Close"
                    >
                        ✕
                    </button>
                </div>

                {/* Sessions */}
                <div className="relative max-h-[60vh] space-y-3 overflow-y-auto p-6">
                    {sessions.map((session) => (
                        
                        <div
                            key={session.id}
                            className="
                                group
                                rounded-xl
                                border border-fy-border
                                bg-fy-bg
                                p-5
                                transition
                                hover:border-fy-accent/40
                            "
                        >
                            <div className="flex items-center justify-between gap-6">
                                <div className="min-w-0">
                                    <h3
                                        className="
                                            truncate
                                            text-lg font-semibold
                                            text-fy-text
                                        "
                                    >
                                        {session.name}
                                    </h3>

                                    <div
                                        className="
                                            mt-2
                                            flex items-center gap-3
                                            text-sm text-fy-muted
                                        "
                                    >
                                        <span>
                                            {session.workout_exercises.length} exercises
                                        </span>

                                        <span className="h-1 w-1 rounded-full bg-fy-accent" />

                                        <span>{session.date}</span>
                                    </div>

                                    {session.note && (
                                        <p
                                            className="
                                                mt-3
                                                line-clamp-2
                                                text-sm text-fy-muted
                                            "
                                        >
                                            {session.note}
                                        </p>
                                    )}
                                </div>

                                <Button
                                    variant="secondary"
                                    onClick={() => {
                                        // View Workout komt hier
                                    }}
                                >
                                    View Workout →
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div
                    className="
                        relative
                        flex justify-end
                        border-t border-fy-border
                        px-6 py-4
                    "
                >
                    <Button variant="ghost" onClick={onClose}>
                        Close
                    </Button>
                </div>
            </div>
        </div>
    );
};