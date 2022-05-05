import CloseButton from "components/CloseButton";
import succesIcon from "assets/success.svg";

type FeedbackSuccessStepProps = {
  handleRestartFeedback: () => void;
};

export default function FeedbackSuccessStep({
  handleRestartFeedback,
}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={succesIcon} alt="Icone de sucesso" />
        <p className="text-xl mt-2">Agradecemos o feedback!</p>
        <button
          type="button"
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-purple-500 transition-colors"
          onClick={handleRestartFeedback}
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
}
