export const Sidebar = () => {
    const sideBarSections = [
        {
            title:"Overview",
            items:[
                {
                href:"Dashboard"
                }
            ]
        },
        {
            title:"Traning",
            items:[
                
                {href:"Start Workout"},
                {href:"Workout History"},
                {href: "Exercises"},
                
            ]
        },
        {
            title:"Progress",
            items:[
                
                {href:"Personal Record"},
                {href:"Statistics"},
                
            ]
        }
    ]
    return (
        <aside>
            <nav>
                {sideBarSections.map((section) =>{
                    return (
                        <section>
                        <h2 key={section.title}>{section.title}</h2>
                        {section.items.map((item) =>{
                            return (
                                <ul>
                                <li key={item.href}>
                                    <a>{item.href}</a>
                                </li>
                                </ul>
                            )
                        })}
                        </section>
                    )
                })};
            </nav>
        </aside>
    );
};