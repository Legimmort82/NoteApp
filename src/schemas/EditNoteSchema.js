import { z } from "zod";

 export const EditNoteSchema = z.object({
  title: z.string().min(1, { message: "Enter a title please" }),
  tag: z.string(),
  desc: z.string().min(1, { message: "Enter at least one character" }),
});
