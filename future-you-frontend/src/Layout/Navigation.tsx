export const Navigation = () => {
    const navItems = ["Dashboard", "Workout", "Progress", "Community"];


        return (
            <nav className="flex justify-around">
            <ul className="flex gap-fy-4">
           {navItems.map((item) => {
            return (
            <li key={item}>
                <a>{item}</a>
            </li>
        );
    })}
</ul>
</nav>
)
}
