import { ChevronLeft, ChevronRight, Equal, EqualNot } from "lucide-react";
import { type ReactNode } from "react";
import { type Schema } from "../../schemas/secondForm";

interface SecondFormFilterProps {
  filter: Schema;
}

const icons: Record<string, ReactNode> = {
  different: <EqualNot />,
  equal: <Equal />,
  greaterThan: <ChevronRight />,
  lessThan: <ChevronLeft />,
};

export const SecondFormFilter = ({ filter }: SecondFormFilterProps) => {
  return (
    <li className="grid grid-cols-3 gap-4">
      <h3 className="text-gray-600">{filter.column}</h3>

      <span className="text-gray-600">{icons[filter.operator]}</span>

      <p className="text-gray-600">{filter.value}</p>
    </li>
  );
};
