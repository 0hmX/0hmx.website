import React from 'react';

const colors = [
  '#FF6B6B', // Red
  '#4ECDC4', // Teal
  '#45B7D1', // Blue
  '#F7FFF7', // Light
  '#FFE66D', // Yellow
];

const generateRandom = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const BackgroundAnimation: React.FC = () => {
  const balls = Array.from({ length: 10 }).map((_, i) => {
    const size = generateRandom(100, 300);
    const color = colors[Math.floor(generateRandom(0, colors.length))];
    const duration = generateRandom(15, 30);
    const delay = generateRandom(0, 5);
    const top = generateRandom(0, 100);
    const left = generateRandom(0, 100);

    return (
      <div
        key={i}
        className="absolute rounded-full filter blur-3xl opacity-70"
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          top: `${top}%`,
          left: `${left}%`,
          animation: `moveBall ${duration}s infinite alternate ease-in-out ${delay}s`,
        }}
      />
    );
  });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {balls}
    </div>
  );
};

export default BackgroundAnimation;
