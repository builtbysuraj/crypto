import "./Home.scss";
import btcSrc from "../../assets/btc.png";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="home">
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <img src={btcSrc} />
      </motion.div>
    </div>
  );
}
