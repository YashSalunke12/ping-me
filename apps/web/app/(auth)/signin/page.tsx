import { auth } from "@/auth";
import SignIn from "@/components/auth/SignIn";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await auth();
  if (session) {
    redirect("/dashboard");
  }

  return <SignIn />;
}
