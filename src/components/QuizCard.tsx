import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface QuizCardProps {
  question: string;
  answer: string;
}

const QuizCard: React.FC<QuizCardProps> = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-80 h-80 md:w-[40rem] md:h-[40rem] bg-secondary rounded-lg p-6 cursor-pointer transform transition-transform duration-500 [transform-style:preserve-3d]"
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ transform: isFlipped ? 'rotateY(180deg)' : '' }}
    >
      <div className="absolute w-full h-full top-0 left-0 p-6 [backface-visibility:hidden] overflow-auto flex items-center justify-center">
        <div className="prose dark:prose-invert text-base md:text-lg font-semibold text-foreground mx-auto">
          {!isFlipped && <ReactMarkdown>{question}</ReactMarkdown>}
        </div>
      </div>
      <div className="absolute w-full h-full top-0 left-0 p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-auto flex items-center justify-center">
        <div className="prose dark:prose-invert text-base md:text-lg text-foreground mx-auto">
          {isFlipped && <ReactMarkdown>{answer}</ReactMarkdown>}
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
