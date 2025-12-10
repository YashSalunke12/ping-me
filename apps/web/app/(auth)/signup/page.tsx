import { auth } from "@/auth";
import SignUp from "@/components/auth/SignUp";
import { redirect } from "next/navigation";

export default async function SignUpPage() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return <SignUp />;
}
