"use client";
import { useAuthStore } from "@/store/auth/auth.store";
import { Button } from "./button";
import { roboto } from "./fonts";

export default function LoginForm() {
  const loginUser = useAuthStore((state) => state.loginUser);
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };
    await loginUser(email.value, password.value);
  };

  return (
    <form className="space-y-3" onSubmit={onSubmit}>
      <div className="flex-1 rounded-lg md:w-[480px] md:h-[454px] bg-purple-200 px-12 pb-4 pt-12">
        <h1
          className={`${roboto.className} antialiased w-full font-bold text-5xl mb-8 text-center`}
        >
          Iniciar Sesion
        </h1>
        <div className={`w-full ${roboto.className} antialiased`}>
          <div>
            <div className="relative">
              <input
                className="peer block w-full h-12 mb-4 rounded-md border border-gray-200 py-[9px] pl-2 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="relative">
              <input
                className="peer block w-full h-12 mb-4 rounded-md border border-gray-200 py-[9px] pl-2 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Contraseña"
                required
                minLength={6}
              />
            </div>
          </div>
        </div>
        <Button type="submit" className="mt-4 w-full h-14 text-xl">
          Iniciar Sesión
        </Button>
        <hr className="mt-8 mb-10 border-secundaryGray" />
        {/* <div className="flex h-8 items-end space-x-1"> */}
        {/* Add form errors here */}
        {/* </div> */}
        <div className="text-center">
          <a
            href="/forgot-password"
            className="text-sm text-black hover:underline"
          >
            ¿Olvidó su contraseña?
          </a>
        </div>
      </div>
    </form>
  );
}
