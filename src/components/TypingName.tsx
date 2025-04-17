"use client";
import { Typewriter } from 'react-simple-typewriter';

const TypingName = () => {
  return (
    <span className="text-green-400">
      <Typewriter
        words={['Abdellah Ait Bachikhe']}
        cursor
        cursorStyle="|"
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </span>
  );
};

export default TypingName;
