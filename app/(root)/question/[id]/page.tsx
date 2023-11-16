import {getQuestionById} from "@/lib/actions/question.action";

interface params {params: { id: string }}

export default async function QuestionPage({params} : params) {

    const question = await getQuestionById({questionId: params.id})

    return (
        <>{`QuestionPage for question "${question.title}"`}</>
    );
}
