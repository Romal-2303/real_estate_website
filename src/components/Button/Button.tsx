"use client";

import classes from "./Button.module.scss";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  btnStyle?: React.CSSProperties;
}

const Button = ({ children, btnStyle }: ButtonProps) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9, rotate: 1 }}
      className={classes["btn-container"]}
      style={btnStyle}
    >
      {children}
    </motion.button>
  );
};

export default Button;
