import { UserAuthForm } from "@/components/pages/login/user-auth-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <div className="grid place-content-center w-full h-screen bg-slate-900">
      <div className="flex flex-col justify-center space-y-6 w-[350px]">
        <UserAuthForm />
      </div>
    </div>
  );
}
