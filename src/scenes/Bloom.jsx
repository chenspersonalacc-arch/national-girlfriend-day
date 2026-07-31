import { motion } from "framer-motion";
import { useEffect } from "react";


export default function Bloom({ onFinish }) {


  useEffect(() => {

    const timer = setTimeout(() => {

      onFinish();

    }, 3500);


    return () => clearTimeout(timer);

  }, [onFinish]);



  return (

    <motion.div

      className="
      fixed
      inset-0
      flex
      items-center
      justify-center
      overflow-hidden
      "

      initial={{
        backgroundColor:"#FAF8F6"
      }}

      animate={{
        backgroundColor:"#F9EEF3"
      }}

      transition={{
        duration:2
      }}

    >


      {/* Expanding glow */}

      <motion.div

        className="
        absolute
        w-32
        h-32
        rounded-full
        bg-pink-300
        blur-3xl
        "

        initial={{

          scale:0,

          opacity:0

        }}

        animate={{

          scale:12,

          opacity:0.35

        }}

        transition={{

          duration:2.5

        }}

      />



      {/* Welcome text */}

      <motion.div

        initial={{

          opacity:0,

          y:10

        }}

        animate={{

          opacity:1,

          y:0

        }}

        transition={{

          delay:0.7,

          duration:1

        }}

        className="
        text-center
        z-10
        "

      >


        <p

          className="
          text-neutral-500
          tracking-[0.25em]
          uppercase
          text-xs
          "

        >

          Welcome

        </p>



        <h1

          className="
          text-5xl
          mt-4
          text-neutral-800
          "

          style={{

            fontFamily:"Dancing Script"

          }}

        >

          Babi

        </h1>


      </motion.div>


    </motion.div>

  );

}