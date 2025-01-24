import { nestApi } from "@/lib/http";
import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const { data } = await nestApi.post("/auth/login", {
    email: formData.get("email"),
    password: formData.get("password"),
  });
  const { accessToken } = data;
  if (!accessToken) {
    throw new Error("Invalid token");
  }
  await createSession(accessToken);

  redirect("/dashboard/home");
}
