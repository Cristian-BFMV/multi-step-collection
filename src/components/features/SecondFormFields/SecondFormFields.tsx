import { Combobox } from "@/components/ui/combobox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMemo } from "react";
import { Control } from "react-hook-form";
import { type Schema } from "../../schemas/secondForm";

interface SecondFormFieldsProps {
  control: Control<Schema>;
  submittedFilters: Array<Schema>;
}

const options = [
  {
    label: "Columna 1",
    value: "column1",
  },
  {
    label: "Columna 2",
    value: "column2",
  },
  {
    label: "Columna 3",
    value: "column3",
  },
  {
    label: "Columna 4",
    value: "column4",
  },
];

export const SecondFormFields = ({
  control,
  submittedFilters,
}: SecondFormFieldsProps) => {
  const availableOptions = useMemo(() => {
    const map = new Map<string, string>();

    submittedFilters.forEach(({ column }) => {
      map.set(column, column);
    });

    return options.filter(({ value }) => !map.has(value));
  }, [submittedFilters]);

  return (
    <section className="grid grid-cols-3 gap-4">
      <FormField
        control={control}
        name="column"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Columna</FormLabel>
            <FormControl>
              <Combobox
                label="Seleccione la columna"
                onChange={field.onChange}
                options={availableOptions}
                value={field.value}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="operator"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Operador</FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona el operador" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="equal">Igual</SelectItem>
                <SelectItem value="different">Diferente</SelectItem>
                <SelectItem value="greaterThan">Mayor que</SelectItem>
                <SelectItem value="lessThan">Menor que</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="value"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Valor</FormLabel>
            <FormControl>
              <Input placeholder="Ingrese el valor" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </section>
  );
};
