import { motion } from "framer-motion";
import { useState } from "react";


export default function EnvelopeCard({ onOpen }) {

  const [opened, setOpened] = useState(false);


  function openEnvelope(){

    if(opened) return;

    setOpened(true);


    setTimeout(()=>{

      onOpen?.();

    },1500);

  }


  return (

    <motion.div

      initial={{
        y:120,
        opacity:0
      }}

      animate={{
        y:0,
        opacity:1
      }}

      transition={{
        duration:1,
        ease:[0.22,1,0.36,1]
      }}

      className="
      relative
      w-[320px]
      h-[220px]
      cursor-pointer
      "

      onClick={openEnvelope}

    >


      {/* Shadow */}

      <div
        className="
        absolute
        inset-0
        translate-y-5
        rounded-xl
        bg-black/10
        blur-2xl
        "
      />



      {/* Envelope body */}

      <motion.div

        animate={{

          y: opened ? 20 : 0

        }}

        transition={{
          duration:1
        }}

        className="
        absolute
        inset-0
        rounded-2xl
        bg-[#FFF8FB]
        border
        border-pink-100
        shadow-xl
        "

      />



      {/* Flap */}

      <motion.div

        animate={{

          rotateX: opened ? -180 : 0

        }}

        transition={{

          duration:1,
          ease:"easeInOut"

        }}

        className="
        absolute
        left-0
        top-0
        h-1/2
        w-full
        origin-top
        "

        style={{

          clipPath:
          "polygon(0 0,100% 0,50% 100%)",

          background:"#FFEAF2",

          transformStyle:"preserve-3d"

        }}

      />



      {/* Seal */}

      <motion.div

        animate={{

          scale: opened ? 0 : 1,

          opacity: opened ? 0 : 1

        }}

        whileHover={{

          scale: opened ? 0 : 1.08

        }}

        transition={{

          duration:0.6

        }}

        className="
        absolute
        left-1/2
        top-[45%]
        h-12
        w-12
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-pink-300
        shadow-lg
        "

      />



      {/* Hint */}

      <motion.p

        animate={{

          opacity: opened ? 0 : [0.4,1,0.4]

        }}

        transition={{

          repeat:opened ? 0 : Infinity,

          duration:2

        }}

        className="
        absolute
        bottom-5
        w-full
        text-center
        text-sm
        text-neutral-500
        "

      >

        Open your letter

      </motion.p>


    </motion.div>

  );

}