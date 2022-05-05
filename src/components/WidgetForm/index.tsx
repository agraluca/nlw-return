import { useState } from "react";
import FeedbackContentStep from "./Steps/FeedbackContentStep";
import FeedbackSuccessStep from "./Steps/FeedbackSuccessStep";
import FeedbackTypeStep, { FeedbackProps } from "./Steps/FeedbackTypeStep";

export default function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackProps | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleFeedbackType = (feedback: FeedbackProps) => {
    setFeedbackType(feedback);
  };

  const handleRestartFeedback = () => {
    setFeedbackSent(false);
    setFeedbackType(null);
  };

  const handleFeedbackSent = () => {
    setFeedbackSent(true);
  };

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep handleRestartFeedback={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep handleFeedbackType={handleFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              handleRestartFeedback={handleRestartFeedback}
              handleFeedbackSent={handleFeedbackSent}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com 🤍 por{" "}
        <a
          className="underline underline-offset-2 text-purple-500 hover:text-purple-800"
          href="https://github.com/agraluca"
        >
          Luca Agra
        </a>
      </footer>
    </div>
  );
}
