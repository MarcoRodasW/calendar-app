import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GitHubIcon from "@/lib/icons/github";
import GoogleIcon from "@/lib/icons/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <div className="grid place-content-center w-full h-screen bg-slate-900">
      <div className="flex flex-col justify-center space-y-6 w-[350px]">
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Iniciar sesion</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-2 text-center">
              <Button variant="outline">
                <GoogleIcon className="mr-2 h-4 w-4" />
                Iniciar sesion con Google
              </Button>
              <Button variant={"outline"}>
                <GitHubIcon className="mr-2 h-4 w-4" />
                Iniciar sesion con Github
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
