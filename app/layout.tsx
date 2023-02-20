import { SessionProvider } from '../components/SessionProvider'
import SideBar from '../components/SideBar'
import { getServerSession } from 'next-auth'
import '../styles/globals.css'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import Login from '../components/Login'
import ClientProvider from '../components/ClientProvider'
import TopBar from '../components/TopBar'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  console.log(session)

  return (
    <html>
      <head>
        <meta charSet='UTF-8' />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta property="og:title" content="ChatGPT" />
        <meta property="og:image" itemProp="image"
        content="https://i.postimg.cc/gjk0pm4n/chatgpt-meta-preview-200.png" />
        <meta property="og:image:alt" content="Be Mine Valentine Heart animation" />
        <meta property="og:description" content="Project by Er. Sumit Kumar" />
        <meta property="og:url" content="https://chatgpt-sumit.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/png"/>
        <meta property="og:image:width" content="300"/>
        <meta property="og:image:height" content="300"/>
        <meta name="twitter:card" content="summary" />
        <meta name="description" content="A heart animation app. Click to visit website." />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content="HTML, CSS, JavaScript, AnimeJs, heart, animation" />
        <meta name="author" content="Er. Sumit Kr." />
        <title>ChatGPT</title>
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="canonical" href="https://chatgpt-sumit.vercel.app/" />
        {/* <link rel="manifest" href="manifest.webmanifest" /> */}



      </head>
      <body>
        <SessionProvider session={session} >
          { !session ? ( 
            <Login/>
          ) : (
            <div className="flex">
             
            {/* sidebar */}
            <div className='bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem] absolute z-10 md:relative md:z-0 ' >
            <SideBar/>
            </div>
            
            {/* client provider -Notification */}
            <ClientProvider/>
            <div className="bg-[#343541] flex-1 " ><TopBar />{children}</div>
            </div>
            
          )
          
          }
      
        </SessionProvider>
        </body>
    </html>
  )
}
