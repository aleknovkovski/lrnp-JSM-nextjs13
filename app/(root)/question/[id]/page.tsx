interface params {params: { id: string }}

export default function QuestionPage({params} : params) {
    return (
        <>{`QuestionPage for question ${params.id}`}</>
    );
}
