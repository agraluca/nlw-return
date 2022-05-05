import bugImageUrl from "assets/bug.svg";
import ideaImageUrl from "assets/idea.svg";
import otherImageUrl from "assets/other.svg";

import CloseButton from "components/CloseButton";

export const feedbackTypes = {
  bug: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  idea: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  other: {
    title: "Outros",
    image: {
      source: otherImageUrl,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

export type FeedbackProps = keyof typeof feedbackTypes;

type FeedbackTypeStepProps = {
  handleFeedbackType: (key: FeedbackProps) => void;
};

export default function FeedbackTypeStep({
  handleFeedbackType,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              onClick={() => handleFeedbackType(key as FeedbackProps)}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-purple-500 focus:border-purple-500 focus:outline-none"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <p>{value.title}</p>
            </button>
          );
        })}
      </div>
    </>
  );
}
