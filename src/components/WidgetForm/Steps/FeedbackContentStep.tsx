import CloseButton from "components/CloseButton";
import { ArrowLeft } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import ScreenshotButton from "../ScreenshotButton";
import { FeedbackProps, feedbackTypes } from "./FeedbackTypeStep";

type FeedbackContentStepProps = {
  feedbackType: FeedbackProps;
  handleRestartFeedback: () => void;
  handleFeedbackSent: () => void;
};

export default function FeedbackContentStep({
  feedbackType,
  handleRestartFeedback,
  handleFeedbackSent,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState<string>("");
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  const handleScreenshot = (screenshot: string | null) => {
    setScreenshot(screenshot);
  };

  const handleComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleSubmitFeedback = (event: FormEvent) => {
    event.preventDefault();
    console.log({ comment, screenshot, feedbackType });
    handleFeedbackSent();
  };
  return (
    <>
      <header>
        <button
          type="button"
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
          onClick={handleRestartFeedback}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-purple-500 focus:ring-purple-500 focus:ring-1 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que esta acontecendo..."
          onChange={handleComment}
          value={comment}
        ></textarea>
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            handleScreenshot={handleScreenshot}
          />
          <button
            disabled={!comment}
            type="submit"
            className="p-2 bg-purple-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-purple-500 transition-colors disabled:opacity-50 disabled:hover:bg-purple-500"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}
