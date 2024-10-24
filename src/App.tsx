import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { FirstForm } from "./components/features/FirstForm/FirstForm";
import { SecondForm } from "./components/features/SecondForm/SecondForm";
import { Summary } from "./components/features/Summary/Summary";
import { type Schema as FirstFormSchema } from "./components/schemas/firstForm";
import { type Schema as SecondFormSchema } from "./components/schemas/secondForm";

export const App = () => {
  const [filters, setFilters] = useState<Array<SecondFormSchema> | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [tab, setTab] = useState<"first" | "second" | "third">("first");

  const firstFormSubmit = ({ name }: FirstFormSchema) => {
    setName(name);
    setTab("second");
  };

  const secondFormSubmit = (filters: Array<SecondFormSchema>) => {
    setFilters(filters);
    setTab("third");
  };

  return (
    <section className="px-20 py-10">
      <header>
        <h1 className="font-bold text-gray-600">Create Collection</h1>
      </header>

      <article>
        <Tabs className="w-full" value={tab}>
          <TabsList className="grid grid-cols-3 gap-2 w-full">
            <TabsTrigger value="first">Name</TabsTrigger>
            <TabsTrigger value="second">Filters</TabsTrigger>
            <TabsTrigger value="third">Summary</TabsTrigger>
          </TabsList>
          <TabsContent value="first">
            <FirstForm defaultValue={name} submit={firstFormSubmit} />
          </TabsContent>
          <TabsContent value="second">
            <SecondForm
              defaultValue={filters}
              submitFilters={secondFormSubmit}
            />
          </TabsContent>
          <TabsContent value="third">
            {filters && name && <Summary filters={filters} name={name} />}
          </TabsContent>
        </Tabs>
      </article>
    </section>
  );
};
