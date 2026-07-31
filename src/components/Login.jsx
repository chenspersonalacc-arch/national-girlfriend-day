import { useState } from "react";
import { motion } from "framer-motion";

export default function Login({ onSuccess }) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  function continueJourney() {
    if (name.trim().toLowerCase() === "keith") {
      onSuccess();
    } else {
      setError("Hmm... I don't think that's my baby 💗");
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 w-[90%] max-w-sm"
    >
      <div className="text-center">

        <div className="text-6xl mb-6">
          💗
        </div>

        <h1 className="text-3xl text-pink-600 font-serif mb-6">
          What's your name?
        </h1>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="First name..."
          className="w-full border border-pink-200 rounded-xl p-3 text-center outline-none"
        />

        <button
          onClick={continueJourney}
          className="mt-5 w-full bg-pink-500 text-white rounded-xl p-3 transition active:scale-95"
        >
          Continue 💌
        </button>

        {error && (
          <p className="mt-4 text-red-400">
            {error}
          </p>
        )}

      </div>
    </motion.div>
  );
}