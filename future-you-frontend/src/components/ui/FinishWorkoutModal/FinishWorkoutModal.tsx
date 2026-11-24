type Props = {
    onCancel:() => void;
    onConfirm:() => void;
}
export const FinishWorkoutModal = ({onCancel,onConfirm}:Props) => {

    return (
    <div className="responsive-overlay bg-black/70">
        <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="finish-workout-title"
            className="responsive-dialog max-w-sm rounded-2xl border border-white/10 bg-fy-surface p-fy-5 text-fy-text shadow-xl"
        >
            <h2 id="finish-workout-title" className="text-fy-xl font-fysemibold">
                Finish workout?
            </h2>

            <p className="mt-2 text-sm text-white/70">
                Your logged sets will be available in History.
            </p>

            <div className="finish-workout-actions">
                <button
                    onClick={onCancel}
                    type="button"
                    className="rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium"
                >
                    Keep training
                </button>

                <button
                    
                    type="button"
                    className="rounded-lg bg-[var(--color-accent)] px-4 py-2.5 text-sm font-semibold text-black"
                    onClick={onConfirm}
                >
                    Finish workout
                </button>
            </div>
        </section>
    </div>
);
}