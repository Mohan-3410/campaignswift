import { CheckCircle2 } from "lucide-react";

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
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
        </div>
      ) : (
        <div
          className={`flex h-6 w-6 items-center justify-center rounded-full ${
            active ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-400"
          }`}
        >
          {number}
        </div>
      )}
      <span className={`text-sm ${active ? "text-blue-600" : "text-gray-500"}`}>{label}</span>
    </div>
  );
}