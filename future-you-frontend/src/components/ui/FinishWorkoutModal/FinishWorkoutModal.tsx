type Props = {
    onCancel:() => void;
    onConfirm:() => void;
}
export const FinishWorkoutModal = ({onCancel,onConfirm}:Props) => {

    return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4">
        <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="finish-workout-title"
            className="w-full max-w-sm rounded-2xl border border-white/10 bg-fy-surface p-fy-5 text-fy-text shadow-xl"
        >
            <h2 id="finish-workout-title" className="text-fy-xl font-fysemibold">
                Finish workout?
            </h2>

            <p className="mt-2 text-sm text-white/70">
                Your logged sets will be available in History.
            </p>

            <div className="mt-6 grid gap-2 sm:grid-cols-2">
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