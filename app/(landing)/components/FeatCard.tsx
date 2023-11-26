'use client';
import React, { useRef, useState, ReactNode } from 'react';
import { Github, GitFork, Heart } from 'lucide-react';

interface FeatCardProps {
    height?: string;
    width?: string;
    paddingX?: string;
    paddingY?: string;
    children?: ReactNode;
    className?:string;
}

const FeatCard: React.FC<FeatCardProps> = ({
    height,
    width,
    paddingX,
    paddingY,
    children,
    className 
}) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const boxStyles: React.CSSProperties = {
        height: height || "100px",
        width: width || "100px",
        padding: `${paddingY || "8px"} ${paddingX || "8px"}`,
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || isFocused) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative flex justify-center border shadow-2xl rounded-3xl ${className}`}
        >
            <div
                className='pointer-events-none absolute -inset-px opacity-0 transition duration-300'
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,

                }}
            />
            <div style={boxStyles}>
                {children}
            </div>
        </div>
    );
};

export default FeatCard;
