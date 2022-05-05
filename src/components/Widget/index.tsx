import { ChatTeardropDots } from "phosphor-react";

import { Popover } from "@headlessui/react";
import WidgetForm from "components/WidgetForm";

type WidgetProps = {
  text?: string;
};

export default function Widget({ text = "Feedback" }: WidgetProps) {
  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>
      <Popover.Button className="bg-purple-500 text-white px-3  h-12  rounded-full hover:bg-purple-800 transition-colors flex items-center group">
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <p className="pl-2">{text}</p>
        </span>
      </Popover.Button>
    </Popover>
  );
}
