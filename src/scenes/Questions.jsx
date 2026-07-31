import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const questions = [

  {
    question: "What do you want to eat today?",
    options: [
      "🍗 Mang Inasal",
      "🍩 Dunkin'"
    ],
    key: "food"
  },

  {
    question: "What do you want to do today?",
    options: [
      "🎬 Watch Movies",
      "🎮 Play Games"
    ],
    key: "activity"
  }

];



export default function Questions({ onFinish }) {


  const [current, setCurrent] = useState(0);

  const [answers, setAnswers] = useState({});

  const [selected, setSelected] = useState("");



  function choose(option) {


    const updatedAnswers = {

      ...answers,

      [questions[current].key]: option

    };


    setAnswers(updatedAnswers);

    setSelected(option);



    setTimeout(() => {


      if(current < questions.length - 1) {


        setCurrent(current + 1);

        setSelected("");


      } else {


        sessionStorage.setItem(
          "babiPreferences",
          JSON.stringify(updatedAnswers)
        );


        onFinish?.();


      }


    }, 700);


  }



  return (

    <main

      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      bg-gradient-to-br
      from-pink-100
      via-pink-50
      to-rose-100
      "

    >


      <AnimatePresence mode="wait">


        <motion.div


          key={current}


          initial={{

            opacity:0,

            y:30,

            filter:"blur(8px)"

          }}


          animate={{

            opacity:1,

            y:0,

            filter:"blur(0px)"

          }}


          exit={{

            opacity:0,

            y:-30,

            filter:"blur(8px)"

          }}


          transition={{

            duration:0.8

          }}


          className="
          w-full
          max-w-xl
          text-center
          "

        >


          <h1

            className="
            text-4xl
            md:text-5xl
            text-neutral-800
            mb-14
            "

            style={{

              fontFamily:"Cormorant Garamond"

            }}

          >

            {questions[current].question}

          </h1>




          <div

            className="
            grid
            grid-cols-2
            gap-8
            justify-items-center
            max-w-md
            mx-auto
            "

          >


            {questions[current].options.map((option,index)=>(


              <motion.button


                key={option}


                onClick={() => choose(option)}


                initial={{

                  opacity:0,

                  scale:0.8

                }}


                animate={{

                  opacity:
                    selected && selected !== option
                    ? 0.35
                    : 1,


                  scale:
                    selected === option
                    ? 1.08
                    : 1

                }}


                transition={{

                  delay:index * 0.15,

                  duration:0.5

                }}


                whileHover={{

                  scale:1.05

                }}


                whileTap={{

                  scale:0.95

                }}


                className="
                w-40
                h-40
                rounded-3xl
                border
                border-pink-200
                bg-white/40
                backdrop-blur-xl
                shadow-xl
                flex
                items-center
                justify-center
                text-center
                p-5
                text-neutral-700
                text-lg
                "

              >

                {option}

              </motion.button>


            ))}


          </div>




          <p

            className="
            mt-12
            text-sm
            tracking-widest
            text-neutral-500
            opacity-60
            "

          >

            {current + 1} / {questions.length}

          </p>



        </motion.div>


      </AnimatePresence>


    </main>

  );

}
