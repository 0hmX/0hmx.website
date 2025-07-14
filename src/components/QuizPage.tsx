import React, { useState, useEffect } from 'react';
import QuizCard from './QuizCard';

const topics = ['c++', 'ai', 'javascript'];

const QuizPage: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [questions, setQuestions] = useState<{ question: string; answer: string }[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number | null>(null);
  const [lastThree, setLastThree] = useState<number[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const module = await import(`../data/quizzes/${selectedTopic}`);
        setQuestions(module.default);
        setCurrentQuestionIndex(null);
        setLastThree([]);
      } catch (error) {
        console.error('Failed to load quiz questions:', error);
        setQuestions([]);
        setCurrentQuestionIndex(null);
        setLastThree([]);
      }
    };
    fetchQuestions();
  }, [selectedTopic]);

  const getNextQuestion = () => {
    if (questions.length === 0) return;

    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * questions.length);
    } while (lastThree.includes(nextIndex));

    setCurrentQuestionIndex(nextIndex);
    setLastThree((prev) => [...prev.slice(-2), nextIndex]);
  };

  return (
    <section className="w-full px-4 md:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-display-lg font-black text-foreground leading-none tracking-tighter mb-6">
            Quiz
          </h1>
          <div className="flex justify-center space-x-4">
            {topics.map((topic) => (
              <button
                key={topic}
                className={`px-4 py-2 rounded-lg font-medium ${
                  selectedTopic === topic
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground'
                }`}
                onClick={() => setSelectedTopic(topic)}
              >
                {topic.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8 mx-auto w-fit">
          {currentQuestionIndex !== null ? (
            <QuizCard
              question={questions[currentQuestionIndex].question}
              answer={questions[currentQuestionIndex].answer}
            />
          ) : (
            <div className="w-80 h-80 md:w-[40rem] md:h-[40rem] bg-secondary rounded-lg flex items-center justify-center mx-auto">
              <p className="text-lg text-muted-foreground text-center">
                Select a topic and click "Next Question" to start.
              </p>
            </div>
          )}
        </div>

        <div className="text-center">
          <button
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium"
            onClick={getNextQuestion}
          >
            Next Question
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuizPage;
