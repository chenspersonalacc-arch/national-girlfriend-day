import { motion } from "framer-motion";

export default function Gift({ onYes }) {

  return (

    <main
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      bg-[#FDECF3]
      "
    >

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
        text-center
        w-full
        max-w-lg
        "

      >

        {/* Question */}

        <motion.h1

          initial={{
            opacity:0
          }}

          animate={{
            opacity:1
          }}

          transition={{
            duration:1,
            delay:0.3
          }}

          className="
          text-5xl
          leading-tight
          text-neutral-800
          "

          style={{
            fontFamily:"Dancing Script"
          }}

        >

          Can I give you
          <br/>
          something?

        </motion.h1>



        {/* Choices */}

        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:1,
            delay:1
          }}

          className="
          mt-16
          flex
          justify-center
          gap-5
          "

        >


          <GlassChoice

            onClick={onYes}

          >

            Yes ♡

          </GlassChoice>



          <GlassChoice

            onClick={onYes}

          >

            Obviously ♡

          </GlassChoice>


        </motion.div>


      </motion.div>


    </main>

  );

}




function GlassChoice({ children, onClick }) {

  return (

    <motion.button

      onClick={onClick}

      whileHover={{
        scale:1.05
      }}

      whileTap={{
        scale:0.95
      }}

      className="
      px-10
      py-4
      rounded-3xl
      border
      border-pink-200
      bg-white/40
      backdrop-blur-xl
      shadow-lg
      text-neutral-700
      text-lg
      transition
      hover:bg-white/70
      "

    >

      {children}

    </motion.button>

  );

}
