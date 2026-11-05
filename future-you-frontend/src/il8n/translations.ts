export const translations = {
    nl: {
        morninglabel: "GOEDEMORGEN",
        greeting: "Hallo",
        subtitle: "Klaar om te trainen?",
        workoutday: "Training van vandaag",
        workout: "Pushdag",
        workoutexercise: "oefeningen",
        buttonworkout: "Start training",
        week: "Deze week",
        humor: "Die gewichten tillen zichzelf niet hè 👀",
        history: "Trainingsgeschiedenis",
        streak: "Streak",
        streakDay: "dag",
        streakDays: "dagen",
        noWorkouts: "Geen trainingen op deze dag",
        template: "Kies een template om je workout te beginnen absolute beest!",
        today: "Vandaag",
        name:"Yusuf",
        close: "Sluiten",
        
subtitleFuturize: "Ontdek een nieuwe manier van trainen. Niet alleen je trainingen bijhouden, maar ook contact maken met andere sporters. FUTURIZE!!",
communityFeed: "Community Feed",
communityDescription: "Ontdek wat anderen delen",
community: "Community",
myPosts: "Mijn posts",
myPostsDescription: "Jouw bijdragen aan Futurize",
yourActivity: "Jouw activiteit",
noUserPosts: "Je hebt nog geen posts geplaatst",
noCommunityPosts: "Er zijn nog geen posts geplaatst",
createPost: "Nieuwe post",

        monthNames: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
        dayNames: ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"],
        streakMood: [
            "Tijd om te beginnen! 💪",
            "Goed bezig, houd vol! 🔥",
            "Je bent on fire! 🔥🔥",
            "Ongelooflijk! Wat een machine! 🏆"
        ],
        streakCard: {
            currentStreak: "Huidige streak",
            days: "dagen",
            message: (days: number) =>
                `${days}? Oké... misschien ben je toch niet helemaal nutteloos.`,
        },
    },
    en: {
        morninglabel: "GOOD MORNING",
        greeting: "Hello",
        subtitle: "Ready to train?",
        workoutday: "Today's workout",
        workout: "Push day",
        workoutexercise: "exercises",
        buttonworkout: "Start workout",
        week: "This week",
        humor: "Those weights aren't gonna lift themselves 👀",
        history: "Workout history",
        name:"Yusuf",
        streak: "Streak",
        streakDay: "day",
        streakDays: "days",
        noWorkouts: "No workouts on this day",
        template:"Choose your template to begin your workout bodybuilder!",
        today: "Today",
        close: "Close",

subtitleFuturize: "Discover a new way to train. Not just tracking your workouts, but connecting with other lifters. FUTURIZE!!",
communityFeed: "Community Feed",
communityDescription: "Discover what others are sharing",
community: "Community",
myPosts: "My Posts",
myPostsDescription: "Your contributions to Futurize",
yourActivity: "Your Activity",
noUserPosts: "You haven't shared any posts yet",
noCommunityPosts: "No community posts yet",
createPost: "Create Post",
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        streakMood: [
            "Time to start! 💪",
            "Good start, keep going! 🔥",
            "You're on fire! 🔥🔥",
            "Incredible! What a machine! 🏆"
        ],
        streakCard: {
            currentStreak: "Current streak",
            days: "days",
            message: (days: number) =>
                `${days}? Okay... maybe you're not completely useless after all.`,
        },
    },

    arz: {
        morninglabel: "صباح الخير",
        greeting: "أهلاً",
        subtitle: "جاهز تتمرن؟",
        workoutday: "تمرينة النهارده",
        workout: "يوم Push",
        workoutexercise: "تمارين",
        buttonworkout: "ابدأ التمرينة",
        week: "الأسبوع ده",
        humor: "يلا يا نجم، الحديد مش هيرفع نفسه 😂",
        history: "تاريخ التمرينات",
        streak: "سلسلة التمرين",
        streakDay: "يوم",

subtitleFuturize: "جرّب طريقة جديدة للتمرين، مش بس تسجّل تمريناتك، لأ ده كمان تبقى جزء من مجتمع بيشجّعك ويدعمك. FUTURIZE!!",
communityFeed: "بوستات المجتمع",
communityDescription: "شوف الوحوش التانية بتعمل إيه 💪",
community: "المجتمع",
myPosts: "بوستاتي",
myPostsDescription: "كل اللي إنت شاركته مع الوحوش",
yourActivity: "نشاطك",
noUserPosts: "إنت لسه منزلتش أي بوستات يا وحش 😂",
noCommunityPosts: "لسه محدش نزّل بوستات هنا",
createPost: "نزّل بوست جديد",
        streakDays: "أيام",
        noWorkouts: "مفيش تمارين النهارده",
        today: "النهارده",
        close: "قفل",
        monthNames: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
        dayNames: ["الاتنين", "التلات", "الأربع", "الخميس", "الجمعة", "السبت", "الأحد"],
        streakMood: [
            "يلا نبدأ! 💪",
            "حلو، كمّل! 🔥",
            "إنت مولّع! 🔥🔥",
            "جامد جداً! يا ماكينة! 🏆"
        ],
       streakCard: {
    currentStreak: "الستريك الحالي",
    day: "يوم",
    twoDays: "يومين",
    days: "أيام",
    message: (days: number,) => {
        const dayLabel =
            days === 1 ? "يوم" :
            days === 2 ? "يومين" :
            days <= 10 ? "أيام" : "يوم";

        return `${days} ${dayLabel}؟ طب ماشي... شكلك مش فاشل خالص أهو.`;
    },
},
        template:"اختار التمبلت عشان تبدأ التمرينة يا وحش 💪",
        name: "يوسف",
    },

}