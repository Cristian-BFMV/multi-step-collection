import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type Schema, schema } from "../../schemas/firstForm";

interface FirstFormProps {
  defaultValue: string | null;
  submit: (data: Schema) => void;
}

export const FirstForm = ({ defaultValue, submit }: FirstFormProps) => {
  const form = useForm<Schema>({
    defaultValues: {
      name: defaultValue ?? "",
    },
    resolver: zodResolver(schema),
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submit)}
        className="p-4 space-y-2 w-full "
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter the name" {...field} />
              </FormControl>
              <FormDescription>This is the collection name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          Confirm
        </Button>
      </form>
    </Form>
  );
};
