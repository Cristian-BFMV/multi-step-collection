import { z } from "zod";

export const schema = z.object({
  column: z.string().min(1, "La columna es requerida"),
  operator: z.string().min(1, "El operador es requerido"),
  value: z.string().min(1, "El valor es requerido"),
});

export type Schema = z.infer<typeof schema>;
