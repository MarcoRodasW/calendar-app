"use server";
import { createClient } from "@/lib/utils/supabase/server";
import { redirect } from "next/navigation";
import { createServerActionProcedure } from "zsa";

export const authenticatedProcedure = createServerActionProcedure().handler(
  async () => {
    const supabase = await createClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user) {
      redirect("/");
    }

    return { user, supabase };
  }
);
