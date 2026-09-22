type Props = {
    activePath: string;
}
export const Sidebar = ({activePath}:Props) => {
    
    const sideBarSections = [
        {
            title:"Overview",
            items:[
                {
                label:"Dashboard",
                href:"/dashboard"
                }
            ]
        },
        {
            title:"Training",
            items:[
                
                {
                    label:"Start Workout",
                    href:"/start-workout"
                },
                {
                    label:"Workout History",
                    href:"/history"
                },
                {
                    label:"Exercises",
                    href: "/exercises"
                },
                
            ]
        },
        {
            title:"Progress",
            items:[
                
                {
                    label:"Personal Record",
                    href:"/personal-record"
                },
                {
                    label:"Statistics",
                    href:"/statistics"
                },
                
            ]
        }
    ]
    return (
        <aside className="w-fy-sidebar shrink-0 border-r border-fy-border p-fy-5">
            <nav className="flex flex-col gap-fy-6">
                {sideBarSections.map((section) =>{
                    return (
                        <section>
                        <h2
                        className="text-fy-xs font-fy-semibold uppercase tracking-wider text-fy-muted"
                         key={section.title}>{section.title}</h2>
                         <ul className="mt-fy-2 flex flex-col gap-fy-2"
                        >
                        {section.items.map((item) =>{
                            const isActive = item.href === activePath
                            return (
                                
                                
                                <li key={item.href}>
                                    <a 
                                    href={item.href}
                                    className={`block rounded-fy-md px-fy-3 py-fy-2 text-fy-sm text-fy-text-secondary transition-colors hover:bg-fy-surface-hover hover:text-fy-text cursor-pointer ${
                                        isActive ? "bg-fy-accent text-fy-text-on-accent font-fy-semibold"
                                        : "text-fy-text-muted"
                                    }`}>
                                        {item.label}
                                        </a>
                                </li>
                                
                            )
                        })}
                        </ul>
                        </section>
                        
                    )
                })};
            </nav>
        </aside>
    );
};