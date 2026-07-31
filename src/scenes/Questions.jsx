import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const questions = [

  {
    question: "What do you want to eat today?",
    options: [
      "🍗 Mang Inasal",
      "🍩 Dunkin'",
      "🍔 Jollibee",
      "🍕 Pizza"
    ],
    key: "food"
  },

  {
    question: "What drink would you like?",
    options: [
      "🧋 Milk Tea",
      "☕ Coffee",
      "🥤 Soft Drink",
      "🍓 Fruit Drink"
    ],
    key: "drink"
  },

  {
    question: "Where would you like to go?",
    options: [
      "🎬 Cinema",
      "🛍 Mall",
      "🌊 Beach",
      "🏠 Stay at Home"
    ],
    key: "place"
  },

  {
    question: "What gift would make you happiest?",
    options: [
      "🌸 Flowers",
      "🍫 Chocolates",
      "🧸 Stuffed Toy",
      "✉️ Letters"
    ],
    key: "gift"
  },

  {
    question: "What would you like to do together?",
    options: [
      "🎮 Play Games",
      "🍿 Watch Movies",
      "💬 Talk for Hours",
      "🚶 Go on a Walk"
    ],
    key: "activity"
  }

];



export default function Questions({ onFinish }) {


  const [current, setCurrent] = useState(0);

  const [answers, setAnswers] = useState({});

  const [selected, setSelected] = useState("");



  function choose(option) {


    const updated = {

      ...answers,

      [questions[current].key]: option

    };


    setAnswers(updated);

    setSelected(option);



    setTimeout(() => {


      if(current < questions.length - 1){

        setCurrent(current + 1);

        setSelected("");

      }

      else{


        localStorage.setItem(
          "babiPreferences",
          JSON.stringify(updated)
        );


        onFinish?.();


      }


    },700);


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
            mb-12
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
            grid-cols-1
            md:grid-cols-2
            gap-5
            "

          >

            {questions[current].options.map((option)=>(


              <motion.button


                key={option}


                onClick={() => choose(option)}


                whileHover={{
                  scale:1.05
                }}


                whileTap={{
                  scale:0.95
                }}


                animate={{

                  opacity:
                    selected && selected !== option
                    ? 0.4
                    : 1

                }}


                className="
                py-5
                px-6
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

                {option}

              </motion.button>


            ))}


          </div>



          <p

            className="
            mt-10
            text-sm
            tracking-widest
            text-neutral-500
            opacity-50
            "

          >

            {current + 1} / {questions.length}

          </p>


        </motion.div>


      </AnimatePresence>


    </main>

  );

}
