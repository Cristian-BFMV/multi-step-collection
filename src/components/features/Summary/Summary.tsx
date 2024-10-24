import { Button } from "@/components/ui/button";
import { useState } from "react";
import { type Schema as SecondFormSchema } from "../../schemas/secondForm";
import { SecondFormModal } from "../SecondFormModal/SecondFormModal";

interface SummaryProps {
  filters: Array<SecondFormSchema>;
  name: string;
}

export const Summary = ({ filters, name }: SummaryProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <section className="grid gap-2">
        <header className="grid gap-2">
          <h2 className="font-black text-gray-600">
            Create Collection Summary
          </h2>

          <p className="text-gray-600">
            This are the values you have submitted
          </p>
        </header>

        <article className="grid gap-2">
          <h3 className="font-black text-gray-600">Name</h3>

          <p>{name}</p>
        </article>

        <article className="grid gap-2">
          <h3 className="font-black text-gray-600">Filters</h3>

          <p>You added {filters.length} filters</p>

          <Button onClick={() => setOpen(true)}>See details</Button>
        </article>
      </section>
      <SecondFormModal filters={filters} onOpenChange={setOpen} open={open} />
    </>
  );
};
