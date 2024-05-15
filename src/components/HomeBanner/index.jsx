"use client"
import React from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import { SharedButton } from "../SharedComponent";
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
        <div className={styles.heroTitle} >
          <span className={styles.greyArea}>We Make,</span>
          <span className={styles.gradientArea}> Creative Things Everyday</span>
        </div>
        <div className={styles.heroDescription} >
          <p>We are digital agency that helps immersive and engaging user experiences that</p>
        </div>
        <div className={styles.buttonWrapper}>
          <Link href={`/auth/register`}>
            <SharedButton className={styles.button}>Let&apos;s Start</SharedButton>
          </Link>
          <Link href={`auth/register`}>
            <div className={styles.freeScanButtonBorder}>
              <SharedButton className={styles.freeScanButton}>Our Work</SharedButton>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
