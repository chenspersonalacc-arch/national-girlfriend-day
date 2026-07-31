import { motion } from "framer-motion";


export default function GlassButton({
  children,
  onClick,
  className = ""
}) {

  return (

    <motion.button

      onClick={onClick}

      whileHover={{
        scale: 1.04
      }}

      whileTap={{
        scale: 0.96
      }}

      className={`
      relative
      overflow-hidden
      rounded-full

      px-8
      py-4

      bg-white/30
      backdrop-blur-xl

      border
      border-white/70

      shadow-[0_8px_30px_rgba(0,0,0,0.08)]

      text-neutral-800

      transition-all
      duration-300

      hover:bg-white/50

      ${className}
      `}

    >

      <span className="relative z-10">
        {children}
      </span>


      <motion.div

        initial={{
          x:"-150%"
        }}

        whileHover={{
          x:"150%"
        }}

        transition={{
          duration:0.8
        }}

        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-transparent
        via-white/40
        to-transparent
        "

      />


    </motion.button>

  );

}