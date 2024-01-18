import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto space-y-5">
        <div className="text-3xl rounded-3xl bg-red-300 font-semibold max-w-lg mx-auto text-center">
          Tailwind
        </div>
        <div className="grid grid-cols-4 gap-5">
          <Card
            src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            title="Laura Johnson"
            description="This is Laura from New York doing work as Software Engineer."
            profile="View Profile →"
          />
          <Card
            src="https://images.pexels.com/photos/17550988/pexels-photo-17550988/free-photo-of-man-walking-with-cellphone.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            title="Jahanzeb"
            description="Muhammad Jahanzeb is learning React Js from youtube and doing work to learn React Js."
            profile="View Profile →"
          />
          <Card
            src="https://images.pexels.com/photos/160599/beauty-leather-style-girl-160599.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Stephenie"
            description="Hey, Stephenie here doing work as Laravel Developer."
            profile="View Profile →"
          />
          <Card
            src="https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Ling Ching"
            description="Myself Ling Ching, working as game developer in software company in Pakistan. It's joke."
            profile="View Profile →"
          />
        </div>
      </div>
    </>
  );
}

export default App;
