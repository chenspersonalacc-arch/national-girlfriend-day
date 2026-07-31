import { motion } from "framer-motion";
import EnvelopeCard from "../components/EnvelopeCard";


export default function Envelope({ onOpen }) {

  return (

    <motion.div

      initial={{
        opacity:0,
        filter:"blur(10px)"
      }}

      animate={{
        opacity:1,
        filter:"blur(0px)"
      }}

      transition={{
        duration:1
      }}

      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gradient-to-br
      from-rose-50
      via-pink-50
      to-white
      "

    >

      <EnvelopeCard
        onOpen={onOpen}
      />

    </motion.div>

  );

}