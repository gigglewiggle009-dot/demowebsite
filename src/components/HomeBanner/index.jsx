"use client"
import React from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import { SharedButton } from "../SharedComponent";
import { motion } from "framer-motion"
export const HomeBanner = () => {

  return (
    <section id="hero" className={styles.wrapper}>
      <video
        id="video-tag"
        muted
        loop
        autoPlay
        playsInline
        preload="auto"
        width={"100%"}
        className={styles.video}
      // poster="/videos/thumbnail.png"
      >
        <source src="coverVideo.webm" type="video/webm" className={styles.video} />
        <source src="coverVideo.mp4" type="video/mp4" className={styles.video} />
      </video>
      <div className={styles.textPosition}>
        <motion.div className={styles.heroTitle}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <span className={styles.greyArea}>We Make,</span>
          <span className={styles.gradientArea}> Creative Things Everyday</span>
        </motion.div>
        <div className={styles.heroDescription} >
          <p>{(
            "Experience the top tier freight services reliable, efficient, and tailored to your needs."
          )
            .split(" ")
            .map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}</p>
        </div>
        <div className={styles.buttonWrapper}>
          <Link href={`/auth/register`}>
            <motion.div
            initial={{ x:150,opacity: 0,}}
            animate={{  x:0,opacity: 1,}}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}>
            <SharedButton className={styles.button}>Let&apos;s Start</SharedButton>
            </motion.div>
          </Link>
          <Link href={`auth/register`}>
            <motion.div 
            initial={{ x:-150,opacity: 0,}}
            animate={{  x:0,opacity: 1,}}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
            className={styles.freeScanButtonBorder}>
              <SharedButton className={styles.freeScanButton}>Our Work</SharedButton>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};
