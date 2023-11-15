import {getAllUsers} from "@/lib/actions/user.action";


export default async function CommunityPage() {
   const result = await getAllUsers({})
   console.log(result.users)
   return (
       <>CommunityPage</>
   );
}
