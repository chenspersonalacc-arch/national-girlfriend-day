import { useState } from "react";
import { motion } from "framer-motion";
import GlassButton from "../components/GlassButton";


export default function Login({ onSuccess }) {

  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);



  async function continueJourney() {

    if (loading) return;


    if (name.trim().toLowerCase() !== "keith") {

      setError("Huh? Who are you?");

      return;

    }


    setError("");

    setLoading(true);


    await new Promise((resolve) =>
      setTimeout(resolve, 1400)
    );


    onSuccess();

  }



  return (

    <motion.div

      initial={{
        opacity:0,
        y:20
      }}

      animate={{
        opacity:1,
        y:0
      }}

      transition={{
        duration:1
      }}

      className="
      w-full
      max-w-sm
      "

    >


      <h1

        className="
        text-4xl
        text-center
        mb-10
        text-neutral-800
        "

        style={{
          fontFamily:"Cormorant Garamond"
        }}

      >

        What's your name?

      </h1>



      <div

        className="
        rounded-2xl
        bg-white/30
        backdrop-blur-xl
        border
        border-white/60
        shadow-lg
        px-6
        "

      >

        <input

          value={name}

          disabled={loading}

          onChange={(e)=>setName(e.target.value)}

          placeholder="First name"

          className="
          w-full
          bg-transparent
          py-4
          outline-none
          text-center
          text-lg
          placeholder:text-neutral-400
          "

        />

      </div>



      <div className="mt-8">


        <GlassButton

          onClick={continueJourney}

          className="
          w-full
          "

        >

          {loading
            ? "Checking..."
            : "Continue →"
          }


        </GlassButton>


      </div>



      {error && (

        <motion.p

          initial={{
            opacity:0
          }}

          animate={{
            opacity:1
          }}

          className="
          text-center
          text-neutral-500
          mt-5
          "

        >

          {error}

        </motion.p>

      )}


    </motion.div>

  );

}