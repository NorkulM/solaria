'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amout: 0.25 }} className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
      <TypingText title="| About Solaria" textStyles="text-center" />
      <motion.p variants={fadeIn('up', 'tween', 0.2, 1)} className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white">
        Enjoy <span className="font-extrabold text-white">virtual worlds</span> by feeling like it's actually real, you can fell what you feel in this digital world, using only <span className="font-extrabold text-white">VR</span> devices you can easily <span className="font-extrabold text-white">explore the Solaria</span> worlds you want. Turn your dreams into reality. Let's explore by scrolling down.
      </motion.p>
      <motion.img variants={fadeIn('up', 'tween', 0.3, 1)} src="/solaria/arrow-down.svg" alt="arrow down" className="w-[18px] h-[28px] object-contain mt-[28px]" />
    </motion.div>
  </section>
);

export default About;
