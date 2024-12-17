import { createCollectionSchema } from "@/lib/types/collections/collections.types";
import { authenticatedProcedure } from "../auth/procedure";
import { revalidatePath } from "next/cache";

export const createCollection = authenticatedProcedure
  .createServerAction()
  .input(createCollectionSchema)
  .handler(async ({ input, ctx }) => {
    const { user, supabase } = ctx;

    const { data, error } = await supabase.from("collections").insert({
      name: input.name,
      user_id: user.id,
      description: input.description,
      image_url: input.image_url,
    }).select();

    if(error){
        throw new Error('Failed to create collection', {cause: error})
    }

    revalidatePath('/collections')
    return data
  });
