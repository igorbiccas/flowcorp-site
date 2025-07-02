import React, { useRef, useEffect, useState, ReactNode } from 'react';

interface AnimatedProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const Animated: React.FC<AnimatedProps> = ({ children, className, delay = 0 }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Disconnect the observer once the element is visible
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            },
            {
                threshold: 0.15,
                // Trigger the animation slightly before it's fully in view
                rootMargin: '0px 0px -50px 0px',
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []); // Empty dependency array ensures this runs only once.

    return (
        <div
            ref={ref}
            className={`${className || ''} fade-in-up ${isVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default Animated;