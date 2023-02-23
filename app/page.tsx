import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import NewChat from "../components/NewChat";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Explain Something to me"</p>
            <p className="infoText">"How do I make an HTTP request?"</p>
            <p className="infoText hidden md:flex ">
              "Got any Creative ideas for a 10 year old's birthday?"
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilties</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Remembers previous chat history</p>
            <p className="infoText">
              Allows user to provide follow-up corrections
            </p>
            <p className="infoText hidden md:flex">
              Declines inappropriate requests
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText hidden md:flex">
              May generate incorrect information
            </p>
            <p className="infoText flex md:hidden">Sometimes Incorrect</p>
            <p className="infoText hidden md:flex">
              May produce harmful content
            </p>
            <p className="infoText hidden md:flex">
              Limited knowledge of world and events after 2021
            </p>
            <p className="infoText flex md:hidden">
              Limited knowledge of events upto 2021 only
            </p>
          </div>
        </div>
      </div>

      <div className=" py-5 px-10 font-bold md:hidden">
        <NewChat text="Start Conversation" />
      </div>
    </div>
  );
}

export default HomePage;
