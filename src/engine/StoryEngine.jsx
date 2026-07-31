import { useEffect, useState } from "react";

import Login from "../scenes/Login";
import Bloom from "../scenes/Bloom";
import Welcome from "../components/Welcome";
import Gift from "../scenes/Gift";
import Envelope from "../scenes/Envelope";
import Letter from "../scenes/Letter";
import Questions from "../scenes/Questions";
import Flowers from "../scenes/Flowers";


export default function StoryEngine() {


  const [scene, setScene] = useState(
    sessionStorage.getItem("scene") || "login"
  );



  function changeScene(next) {

    sessionStorage.setItem("scene", next);

    setScene(next);

  }



  useEffect(() => {

    console.log("Current scene:", scene);

  }, [scene]);



  switch(scene) {


    case "login":

      return (

        <div
          className="
          min-h-screen
          flex
          items-center
          justify-center
          bg-[#FDECF3]
          px-6
          "
        >

          <Login
            onSuccess={() => changeScene("bloom")}
          />

        </div>

      );



    case "bloom":

      return (

        <Bloom
          onFinish={() => changeScene("welcome")}
        />

      );



    case "welcome":

      return (

        <Welcome
          onFinish={() => changeScene("gift")}
        />

      );



    case "gift":

      return (

        <Gift
          onYes={() => changeScene("envelope")}
        />

      );



    case "envelope":

      return (

        <Envelope
          onOpen={() => changeScene("letter")}
        />

      );



    case "letter":

      return (

        <Letter
          onFinish={() => changeScene("questions")}
        />

      );



    case "questions":

      return (

        <Questions
          onFinish={() => changeScene("flowers")}
        />

      );



    case "flowers":

      return (

        <Flowers
          onFinish={() => changeScene("ending")}
        />

      );



    case "ending":

      return (

        <div
          className="
          min-h-screen
          flex
          items-center
          justify-center
          bg-[#FDECF3]
          "
        >

          Thank you ❤️

        </div>

      );



    default:

      sessionStorage.removeItem("scene");

      return (

        <Login
          onSuccess={() => changeScene("bloom")}
        />

      );


  }


}
