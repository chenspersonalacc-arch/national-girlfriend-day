import { useEffect, useState } from "react";

import Login from "../scenes/Login";
import Bloom from "../scenes/Bloom";
import Welcome from "../components/Welcome";
import Gift from "../scenes/Gift";
import Envelope from "../scenes/Envelope";
import Letter from "../scenes/Letter";
import Flowers from "../scenes/Flowers";


export default function StoryEngine() {


  const [scene, setScene] = useState(
    localStorage.getItem("scene") || "login"
  );


  function changeScene(next){

    localStorage.setItem("scene", next);

    setScene(next);

  }


  useEffect(()=>{

    console.log("Scene:", scene);

  },[scene]);



  switch(scene){


    case "login":

      return (

        <div className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[#FDECF3]
        px-6
        ">

          <Login

            onSuccess={() =>
              changeScene("bloom")
            }

          />

        </div>

      );



    case "bloom":

      return (

        <Bloom

          onFinish={() =>
            changeScene("welcome")
          }

        />

      );



    case "welcome":

      return (

        <Welcome

          onFinish={() =>
            changeScene("gift")
          }

        />

      );



    case "gift":

      return (

        <Gift

          onYes={() =>
            changeScene("envelope")
          }

        />

      );



    case "envelope":

      return (

        <Envelope

          onOpen={() =>
            changeScene("letter")
          }

        />

      );



    case "letter":

      return (

        <Letter

          onFinish={() =>
            changeScene("flowers")
          }

        />

      );



    case "flowers":

      return (

        <Flowers

          onFinish={() =>
            changeScene("end")
          }

        />

      );



    case "end":

      return (

        <div className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[#FAF8F6]
        ">

          <h1

            className="text-5xl"

            style={{
              fontFamily:"Dancing Script"
            }}

          >

            I love you forever ❤️

          </h1>

        </div>

      );



    default:

      return (

        <button

          onClick={() =>
            changeScene("login")
          }

        >

          Reset

        </button>

      );


  }


}
