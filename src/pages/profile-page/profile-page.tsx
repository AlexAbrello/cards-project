import { LogOut } from "@/assets/icons/log-out"
import { Avatar, Button, Card } from "@/components/ui"
import { Typography } from "@/components/ui/typography"
import { useLogoutMutation, useMeQuery } from "@/services/auth/auth-api"

export const Profile = () => {

   const { data } = useMeQuery()
   const [logOut] = useLogoutMutation()

   return (
      <>
         {data &&
            <Card>
               <div style={{ height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography.H2>Personal Information</Typography.H2>
                  <Avatar src={data.avatar} size={100}/>
                  <Typography.Body1>{data.name}</Typography.Body1>
                  <Typography.Caption>{data.email}</Typography.Caption>
                  <Button variant={'secondary'} onClick={logOut}>
                     <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ marginRight: '10px' }}>
                           <LogOut />
                        </div>
                        <Typography.Caption>Log Out</Typography.Caption>
                     </div>
                  </Button>
               </div>
            </Card>}
      </>

   )
}