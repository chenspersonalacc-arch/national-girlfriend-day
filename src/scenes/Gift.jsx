import { motion } from "framer-motion";
import GlassButton from "../components/GlassButton";


export default function Gift({ onYes }) {


  return (

    <motion.div

      initial={{
        opacity:0
      }}

      animate={{
        opacity:1
      }}

      transition={{
        duration:1
      }}

      className="
      min-h-screen
      flex
      flex-col
      justify-center
      items-center
      px-8

      bg-gradient-to-br
      from-rose-50
      via-pink-50
      to-white
      "

    >


      <h1

        className="
        text-5xl
        text-center
        text-neutral-800
        leading-tight
        "

        style={{
          fontFamily:"Cormorant Garamond"
        }}

      >

        Can I give you
        <br/>
        something?

      </h1>



      <div

        className="
        mt-16
        flex
        flex-row
        gap-4
        w-full
        max-w-md
        "

      >


        <GlassButton

          onClick={onYes}

          className="
          flex-1
          "

        >

          Yes

        </GlassButton>



        <GlassButton

          onClick={onYes}

          className="
          flex-1
          "

        >

          Obviously

        </GlassButton>



      </div>


    </motion.div>

  );

}