import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Define the weight boundaries for the hover effect
const FONT_WEIGHTS: Record<string, { min: number; max: number; default: number }> = {
  title: { min: 100, max: 900, default: 400 },
  subTitle: { min: 100, max: 600, default: 100 },
};

const setupTextHover = (container: HTMLElement | null, type: 'title' | 'subTitle') => {
  if (!container) return;

  const letters = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_WEIGHTS[type];

  const animateLetter = (letter: HTMLElement, weight: number, duration = 0.25) => {
    return gsap.to(letter, {
      duration,
      ease: 'power2.out',
      fontVariationSettings: `'wght' ${weight}` // Added missing quote and fixed 'whgt'
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2) / 2000);
      animateLetter(letter as HTMLElement, min + (max - min) * intensity);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => animateLetter(letter as HTMLElement, base, 0.3));
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

const renderText = (text: string, classname: string, baseWeight: number = 400) => {
  return [...text].map((char, i) => (
    <span key={i} className={classname} style={{ display: 'inline-block', fontVariationSettings: `'wght' ${baseWeight}` }}>
      {char === " " ? '\u00A0' : char}
    </span>
  ));
};

const Welcome: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subTitleRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const cleanupTitle = setupTextHover(titleRef.current, 'title');
    const cleanupSub = setupTextHover(subTitleRef.current, 'subTitle');

    return () => {
      if (cleanupTitle) cleanupTitle();
      if (cleanupSub) cleanupSub();
    };
  }, []);

  return (
    <section id='welcome' className="flex flex-col items-center justify-center min-h-screen text-center">
      <p ref={subTitleRef} className="overflow-hidden cursor-default">
        {renderText("Hey. I'm Sarthak! welcome to my", "text-3xl font-georama", 100)}
      </p>

      <h1 ref={titleRef} className='mt-7 text-7xl font-georama cursor-default tracking-wider'>
        {renderText("Portfolio", "", 600)}
      </h1>

      <div className='small-screen mt-10 text-gray-500'>
        <p>This Portfolio is designed for desktop/tablet screens only.</p>
      </div>
    </section>
  );
};

export default Welcome;