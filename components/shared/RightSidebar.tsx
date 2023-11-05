const hotQuestions = [
 { _id: 1, title: 'How do I use express as a custom server in NextJS?' },
 { _id: 2, title: 'Cascading Deletes in SQLAlchemy?' },
 { _id: 3, title: 'How to Perfectly Center a Div with Tailwind CSS?' },
 { _id: 4, title: 'Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?' },
 { _id: 5, title: 'Redux Toolkit Not Updating State as Expected' },
];


const popularTags = [
 { _id: 1, name: 'javascript', totalQuestions: 5 },
 { _id: 2, name: 'react', totalQuestions: 5 },
 { _id: 3, name: 'next', totalQuestions: 5 },
 { _id: 4, name: 'vue', totalQuestions: 2 },
 { _id: 5, name: 'redux', totalQuestions: 10 },
]

export default function LeftSidebar() {

    return (
        <section
            className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 h-screen overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none lg:w-[266px]">
            <div>

            </div>
        </section>
    );
}
