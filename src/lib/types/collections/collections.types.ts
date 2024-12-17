import { z } from "zod";

export const createCollectionSchema = z.object({
  description: z.string().nullable(),
  image_url: z.string().nullable(),
  name: z.string(),
  user_id: z.string(),
});
