"use client";

import * as React from "react";
import { useServerAction } from "zsa-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import GitHubIcon from "@/lib/icons/github";
import { Button } from "@/components/ui/button";
import { oAuthSignIn } from "@/lib/actions/auth/actions";

export function UserAuthForm() {
  const { isPending, execute, error, isError } = useServerAction(oAuthSignIn);

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Iniciar sesion</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant={"outline"} onClick={async () => await execute()}>
          {isPending ? <Loader2 size={16} className="animate-spin"/> : <GitHubIcon className="mr-2 h-4 w-4" />}
          Iniciar sesion con Github
        </Button>
        {isError ? (
          <p>{error.message}</p>
        ) : null}
      </CardContent>
    </Card>
  );
}
