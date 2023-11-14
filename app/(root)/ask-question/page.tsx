import Question from "@/components/shared/forms/Question";
import {getUserById} from "@/lib/actions/user.action";
import {redirect} from "next/navigation";
import {auth} from "@clerk/nextjs";


export default async function Page() {
    // get clerkId from clerk auth
    const { userId } = auth();

    // const userId = '123456'
    if (!userId) redirect('/sign-in');

    const mongoUser = await getUserById({userId});

    console.log(mongoUser);

    return (
        <div>
            <h1 className="h1-bold text-dark100_light900">Ask a question</h1>


            <div className="mt-9">
                <Question mongoUserId={JSON.stringify(mongoUser._id)}/>
            </div>
        </div>
    )
}
