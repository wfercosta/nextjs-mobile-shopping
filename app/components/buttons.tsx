import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { ElementType, FunctionComponent } from "react";

interface InformationButtonProps {
  label: string;
  Icon: ElementType;
}

const InformationButton: FunctionComponent<InformationButtonProps> = ({
  label,
  Icon,
}) => {
  return (
    <button className="flex justify-between text-gray-500 text-xs border border-gray-200 rounded-md p-3 w-full">
      <div className="flex items-center space-x-5">
        {Icon && <Icon className="w-6 text-orange-500" />}
        <span>{label}</span>
      </div>
      <ChevronRightIcon className="w-4 text-gray-400" />
    </button>
  );
};

interface CallActionButtonProps {
  label: string;
}

const CallActionButton: FunctionComponent<CallActionButtonProps> = ({
  label,
}) => {
  return (
    <button className="text-sm font-medium bg-orange-500 rounded-md p-3 w-full">
      <span>{label}</span>
    </button>
  );
};

export { InformationButton, CallActionButton };
