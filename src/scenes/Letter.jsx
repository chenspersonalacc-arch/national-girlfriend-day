import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GlassButton from "../components/GlassButton";


function RevealParagraph({ text, onFinish }) {

  const [visibleWords, setVisibleWords] = useState(0);

  const words = text.split(" ");


  useEffect(() => {

    let index = 0;


    const timer = setInterval(() => {

      index++;

      setVisibleWords(index);


      if(index >= words.length){

        clearInterval(timer);

        setTimeout(() => {

          onFinish?.();

        }, 1800);

      }


    }, 140);



    return () => clearInterval(timer);


  }, []);



  return (

    <p

      className="
      text-[20px]
      leading-[2.1]
      text-neutral-700
      text-justify
      first-line:indent-[1in]
      "

      style={{
        fontFamily:"Dancing Script"
      }}

    >

      {words.slice(0, visibleWords).map((word,index)=>(

        <motion.span

          key={index}

          initial={{
            opacity:0
          }}

          animate={{
            opacity:1
          }}

          transition={{
            duration:0.5
          }}

        >

          {word}{" "}

        </motion.span>

      ))}


    </p>

  );

}




export default function Letter({ onFinish }) {


  const paragraphs = [

    `You are the most wonderful, beautiful, sweetest girl in the world. Loving you and being with you is everything to me. Without you, I feel empty. Your eyes look endlessly pretty, your lips are so plump, and you're just so gorgeous.`,

    `I love you and I wish that I can always be close to you so that I can be your crying shoulder, your go-to person, and your cling buddy. I am so lucky that I met you in this life. It makes me want to meet you in my next lives too. I just wanna be yours today, tonight, tomorrow, the next days, the next years, forever and right neow. Kek. Please be mine until our hair grows old.`,

    `Thank you for everything and for being here with me. You deserve every good thing that has happened and will happen. You're a great person, without a doubt. So stay with me until the universe disappears.

Iloveyouuuuuuuuuuuuuuuuu <3`

  ];



  const [currentParagraph,setCurrentParagraph] = useState(0);

  const [finished,setFinished] = useState(false);



  return (

    <main

      className="
      min-h-screen
      bg-[#eee4d8]
      px-5
      py-20
      "

    >


      <motion.article

        initial={{
          opacity:0
        }}

        animate={{
          opacity:1
        }}

        transition={{
          duration:1.5
        }}

        className="
        w-full
        max-w-3xl
        mx-auto
        bg-[#fffdf8]
        shadow-2xl
        px-12
        py-32
        md:px-28
        rounded-sm
        "

      >


        <p

          className="
          text-right
          mb-20
          text-neutral-500
          text-xl
          "

          style={{
            fontFamily:"Dancing Script"
          }}

        >

          July 31, 2026

        </p>



        <h1

          className="
          text-4xl
          mb-24
          text-neutral-800
          "

          style={{
            fontFamily:"Dancing Script"
          }}

        >

          Dear babi,

        </h1>




        <div className="space-y-56">


          {paragraphs.map((paragraph,index)=>(

            index <= currentParagraph && (

              <RevealParagraph

                key={index}

                text={paragraph}

                onFinish={() => {

                  if(index < paragraphs.length - 1){

                    setCurrentParagraph(index + 1);

                  }

                  else{

                    setTimeout(()=>{

                      setFinished(true);

                    },1500);

                  }

                }}

              />

            )

          ))}


        </div>




        {finished && (

          <motion.div

            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

            transition={{
              duration:3,
              ease:"easeInOut"
            }}

            className="
            mt-28
            text-right
            text-3xl
            text-neutral-800
            "

            style={{
              fontFamily:"Dancing Script"
            }}

          >

            With all my love,

            <br/>
            <br/>

            Christian



            <div className="mt-16">

              <GlassButton

                onClick={onFinish}

              >

                I have something else for you →

              </GlassButton>


            </div>


          </motion.div>

        )}


      </motion.article>


    </main>

  );

}
