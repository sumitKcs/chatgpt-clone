import { SessionProvider } from '../components/SessionProvider'
import SideBar from '../components/SideBar'
import { getServerSession } from 'next-auth'
import '../styles/globals.css'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import Login from '../components/Login'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  console.log(session)

  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session} >
          { !session ? ( 
            <Login/>
          ) : (
            <div className="flex">
            {/* sidebar */}
            <div className='bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem] ' >
            <SideBar/>
            </div>
            
            {/* client provider -Notification */}
            <div className="bg-[#343541] flex-1" >{children}</div>
            </div>
            
          )
          
          }
      
        </SessionProvider>
        </body>
    </html>
  )
}
