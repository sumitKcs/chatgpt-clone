import { BoltIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import ChatGPT from '../components/ChatGPT'
import NewChat from '../components/NewChat'


function HomePage() {


  return (
    <div className="flex flex-col items-center justify-center h-screen text-white" >

    <h1 className="text-5xl font-bold mb-20" >ChatGPT</h1>

    <div className='flex space-x-2 text-center' >
     <ChatGPT/>
      <div>
        <div className="flex flex-col items-center justify-center mb-5" >
        <BoltIcon className="h-8 w-8"/>
          <h2>Capabilites</h2>
        </div>
        <div className="space-y-2" >
          <p className="infoText">"Explain Something to me"</p>
          <p className="infoText">"What is the difference between a dog and a cat"</p>
          <p className="infoText hidden md:flex ">"What is the color of the sun?"</p>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center mb-5" >
        <ExclamationTriangleIcon className="h-8 w-8"/>
          <h2>Limitations</h2>
        </div>
        <div className="space-y-2" >
          <p className="infoText">"Explain Something to me"</p>
          <p className="infoText">"What is the difference between a dog and a cat"</p>
          <p className="infoText hidden md:flex">"What is the color of the sun?"</p>
        </div>
      </div>
    </div>
    <div className='my-5 py-5 px-10 font-bold animate-bounce md:hidden' >
    <NewChat text="Start Conversation" />  
    </div>
  </div>
   
  )
}

export default HomePage