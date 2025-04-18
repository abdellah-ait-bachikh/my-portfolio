"use client";
import { useTranslations } from 'next-intl';
import { Typewriter } from 'react-simple-typewriter';
import { useEffect, useState } from 'react';

const TypingName = () => {
  const t = useTranslations('pages.home');
  const [key, setKey] = useState(0); // State to force re-render when language changes

  // Watch for language change and reset the key to restart typewriter effect
  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [t('name')]); // Trigger effect when the 'name' translation changes

  return (
    <span className="text-green-400">
      <Typewriter
        key={key} // This will reset the Typewriter component on language change
        words={[t('name')]}
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
