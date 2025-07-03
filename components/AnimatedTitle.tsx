import React from 'react';

interface AnimatedTitleProps {
  text: string;
  className?: string;
  delay?: number;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ text, className, delay = 0 }) => {
  return (
    <span className={className}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="animate-letter-in"
          style={{ animationDelay: `${delay + (index * 0.05)}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedTitle;
