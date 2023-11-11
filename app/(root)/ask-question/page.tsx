import Question from "@/components/shared/forms/Question";


export default async function Page() {


    return (
        <div>
            <h1 className="h1-bold text-dark100_light900">Ask a question</h1>


            <div className="mt-9">
                <Question/>
            </div>
        </div>
    )
}
