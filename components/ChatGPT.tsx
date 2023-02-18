import { SunIcon } from "@heroicons/react/24/outline"

function ChatGPT() {
  return (
    <div>
    <div className="flex flex-col items-center justify-center mb-5" >
    <SunIcon className="h-8 w-8"/>
      <h2>Examples</h2>
    </div>
    <div className="space-y-2" >
      <p className="infoText">"Explain Something to me"</p>
      <p className="infoText">"What is the difference between a dog and a cat"</p>
      <p className="infoText">"What is the color of the sun?"</p>
    </div>
  </div>
  )
}

export default ChatGPT
