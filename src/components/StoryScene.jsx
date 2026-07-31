import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


export default function StoryScene({
  cards,
  onFinish
}) {

  const [page,setPage] = useState(0);
  const [showHint,setShowHint] = useState(false);


  useEffect(()=>{

    setShowHint(false);

    const timer = setTimeout(()=>{

      setShowHint(true);

    },8000);


    return ()=>clearTimeout(timer);


  },[page]);



  function next(){

    if(page < cards.length - 1){

      setPage(page + 1);

    }else{

      onFinish?.();

    }

  }


  return (

    <div
      className="
      min-h-screen 
      flex 
      items-center 
      justify-center 
      px-6 
      cursor-pointer
      bg-gradient-to-br from-rose-50 via-pink-50 to-white
      "
      onClick={next}
    >

      <AnimatePresence mode="wait">

        <motion.div

          key={page}

          initial={{
            opacity:0,
            y:40,
            filter:"blur(10px)"
          }}

          animate={{
            opacity:1,
            y:0,
            filter:"blur(0px)"
          }}

          exit={{
            opacity:0,
            y:-40,
            filter:"blur(10px)"
          }}

          transition={{
            duration:0.9
          }}

          className="text-center"

        >

          <h1
            className="
            text-5xl 
            md:text-7xl 
            font-semibold 
            text-neutral-800 
            whitespace-pre-line
            "
            style={{
              fontFamily:"Cormorant Garamond"
            }}
          >

            {cards[page]}

          </h1>



          <AnimatePresence>

            {showHint && (

              <motion.p

                initial={{
                  opacity:0,
                  y:10
                }}

                animate={{
                  opacity:0.45,
                  y:0
                }}

                transition={{
                  duration:0.8
                }}

                className="
                mt-12 
                text-sm 
                tracking-widest 
                text-neutral-500
                "

              >

                tap to continue

              </motion.p>

            )}

          </AnimatePresence>


        </motion.div>


      </AnimatePresence>


    </div>

  );

}