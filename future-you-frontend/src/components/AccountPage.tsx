type Props = {
    name:string;
    email:string;
}
export const AccountPage = ({name,email}:Props) => {
    return (
        <section
            aria-labelledby="account-title"
            className="account-page"
        >
            <div className="rounded-2xl border border-white/10 bg-fy-surface account-panel text-fy-text">
                <h1 id="account-title" className="text-fy-xl font-semibold">
                    Account information
                </h1>

                <dl className="mt-5 divide-y divide-white/10">
                    <div className="account-row">
                        <dt className="text-sm opacity-70">Name</dt>
                        <dd className="account-value font-medium">{name}</dd>
                    </div>

                    <div className="account-row">
                        <dt className="text-sm opacity-70">Email</dt>
                        <dd className="account-value font-medium">{email}</dd>
                    </div>
                </dl>
            </div>
        </section>
    );
};