import { Avatar, Card } from "@/components/ui"
import { Typography } from "@/components/ui/typography"
import { useMeQuery } from "@/services/auth/auth-api"

export const Profile = () => {

   const { data } = useMeQuery()

   return (
      <>
         {data && <Card>
            <Typography.H2>Personal Information</Typography.H2>
            <Typography.Body1>{data.name}</Typography.Body1>
            <Avatar src={data.avatar}/>
         </Card>}
      </>

   )
}