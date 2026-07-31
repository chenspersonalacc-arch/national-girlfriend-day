import { motion } from "framer-motion";


export default function Flowers({ onFinish }) {


  return (

    <div

      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gradient-to-br
      from-rose-50
      via-pink-50
      to-white
      px-6
      "

    >

      <motion.div

        initial={{
          opacity:0,
          scale:0.8
        }}

        animate={{
          opacity:1,
          scale:1
        }}

        transition={{
          duration:1.5
        }}

        className="
        text-center
        "

      >


        <motion.div

          animate={{
            y:[0,-12,0]
          }}

          transition={{
            duration:3,
            repeat:Infinity
          }}

          className="
          text-8xl
          mb-10
          "

        >

          💐

        </motion.div>



        <h1

          className="
          text-5xl
          text-neutral-800
          "

          style={{
            fontFamily:"Dancing Script"
          }}

        >

          These are for you, babi.

        </h1>



        <p className="
        mt-6
        text-neutral-500
        ">

          A little gift from me to you.

        </p>



        <button

          onClick={onFinish}

          className="
          mt-12
          rounded-full
          border
          px-8
          py-3
          hover:bg-neutral-900
          hover:text-white
          transition
          "

        >

          Continue →

        </button>


      </motion.div>


    </div>

  );

}