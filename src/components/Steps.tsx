import { Check } from "lucide-react";

interface StepProps {
  number: number;
  label: string;
  completed?: boolean;
  active?: boolean;
}

export function Step({ number, label, completed, active }: StepProps) {
  return (
    <div className="flex items-center space-x-2 mb-4">
      {completed ? (
        <div className="flex h-5 w-5 rounded-full items-center justify-center bg-green-500 ">
          <Check className="h-4 w-4 text-white" />
        </div>
      ) : (
        <div
          className={`flex h-5 w-5 items-center justify-center rounded-full text-xs ${
            active ? "border-primary border-2 text-primary" : "border-gray-200 border-2 "
          }`}
        >
          {number}
        </div>
      )}
      <span className={`text-sm font-medium ${active ? "text-primary" : ""}`}>{label}</span>
    </div>
  );
}