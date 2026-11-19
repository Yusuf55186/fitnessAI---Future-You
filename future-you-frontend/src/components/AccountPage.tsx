type Props = {
    name:string;
    email:string;
}
export const AccountPage = ({name,email}:Props) => {
    return (
        <section
            aria-labelledby="account-title"
            className="mx-auto w-full max-w-xl px-4 py-6 sm:px-6 sm:py-10"
        >
            <div className="rounded-2xl border border-white/10 bg-fy-surface p-5 text-fy-text sm:p-6">
                <h1 id="account-title" className="text-fy-xl font-semibold">
                    Account information
                </h1>

                <dl className="mt-5 divide-y divide-white/10">
                    <div className="grid gap-1 py-3 sm:grid-cols-[8rem_minmax(0,1fr)]">
                        <dt className="text-sm opacity-70">Name</dt>
                        <dd className="break-words font-medium">{name}</dd>
                    </div>

                    <div className="grid gap-1 py-3 sm:grid-cols-[8rem_minmax(0,1fr)]">
                        <dt className="text-sm opacity-70">Email</dt>
                        <dd className="break-words font-medium">{email}</dd>
                    </div>
                </dl>
            </div>
        </section>
    );
};