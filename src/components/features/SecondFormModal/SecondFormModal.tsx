import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { type Schema } from "../../schemas/secondForm";
import { SecondFormFilter } from "../SecondFormFilter/SecondFormFilter";

interface SecondFormModalProps {
  filters: Array<Schema>;
  onOpenChange: (open: boolean) => void;
  open: boolean;
}

export const SecondFormModal = ({
  filters,
  open,
  onOpenChange,
}: SecondFormModalProps) => {
  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Added Filters</DialogTitle>
          <DialogDescription>
            These are the filters you have added at the moment
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="grid gap-4 w-full">
          <header className="grid grid-cols-3 gap-4 text-gray-600 font-black">
            <h2>Column</h2>
            <h2>Operator</h2>
            <h2>Value</h2>
          </header>

          <ul className="grid gap-2">
            {filters.map((filter) => (
              <SecondFormFilter filter={filter} key={filter.column} />
            ))}
          </ul>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
