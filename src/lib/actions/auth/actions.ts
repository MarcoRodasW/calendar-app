"use server";

import { createClient } from "@/lib/utils/supabase/server";
import { redirect } from "next/navigation";
import { createServerAction } from "zsa";

export const oAuthSignIn = createServerAction().handler(async () => {
  const supabase = await createClient();
  const { data } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "http://localhost:3000/auth/callback",
    },
  });

  if (data.url) {
    redirect(data.url); // use the redirect API for your server framework
  }
});

export const oAuthSignOut = createServerAction().handler(async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/");
});
