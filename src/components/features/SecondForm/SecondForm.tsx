import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, Plus, Save, Trash } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { type Schema, schema } from "../../schemas/secondForm";
import { SecondFormFields } from "../SecondFormFields/SecondFormFields";
import { SecondFormModal } from "../SecondFormModal/SecondFormModal";

interface SecondFormProps {
  defaultValue: Array<Schema> | null;
  submitFilters: (filters: Array<Schema>) => void;
}

export const SecondForm = ({
  defaultValue,
  submitFilters,
}: SecondFormProps) => {
  const form = useForm<Schema>({
    defaultValues: {
      column: "",
      operator: "",
      value: "",
    },
    resolver: zodResolver(schema),
  });
  const [filters, setFilters] = useState<Array<Schema>>(defaultValue ?? []);
  const [open, setOpen] = useState<boolean>(false);

  const clear = () => {
    form.reset();
  };

  const confirm = () => {
    submitFilters(filters);
  };

  const submit = (filter: Schema) => {
    clear();
    setFilters((prevFilters) => [...prevFilters, filter]);
  };

  return (
    <>
      <section className="grid gap-4 px-10">
        <article>
          <Form {...form}>
            <form className="grid gap-4" onSubmit={form.handleSubmit(submit)}>
              <SecondFormFields
                control={form.control}
                submittedFilters={filters}
              />
              <section className="grid grid-cols-2 gap-4">
                <Button
                  className="w-full"
                  onClick={clear}
                  type="button"
                  variant="outline"
                >
                  <Trash />
                  Limpiar
                </Button>
                <Button className="w-full" type="submit">
                  <Plus />
                  Agregar
                </Button>
              </section>
            </form>
          </Form>
        </article>

        <article className="grid grid-cols-2 gap-4">
          <Button
            disabled={!filters.length}
            onClick={() => {
              setOpen(true);
            }}
            variant="outline"
          >
            <Eye /> You have added {filters.length} filters{" "}
          </Button>
          <Button disabled={!filters.length} onClick={confirm}>
            <Save /> Confirm
          </Button>
        </article>
      </section>
      <SecondFormModal filters={filters} onOpenChange={setOpen} open={open} />
    </>
  );
};
