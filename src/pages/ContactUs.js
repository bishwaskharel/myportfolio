import React from "react";
// Framer Motion
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const ContactUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff", height: "100vh" }}
    >
      <h1>Bullshit Contact</h1>
    </motion.div>
  );
};

export default ContactUs;
