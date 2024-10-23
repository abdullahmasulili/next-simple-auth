"use client";

import { useState } from "react";

import AuthContainer from "@/layouts/AuthContainer";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import { login } from "@/lib/firebaseAuth";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);
    const creds = Object.fromEntries(formData.entries());

    try {
      const user = await login(creds);
      console.log(user);
      // router.push("/");
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <AuthContainer>
      <form className="w-full" onSubmit={handleSubmit}>
        <Input id="email" name="email" label="Email" type="email" />
        <Input id="password" name="password" label="Password" type="password" />
        <Button block type="submit">
          Sign In
        </Button>
        <Button block type="button" className="bg-blue-500 mt-3">
          Sign In With Google
        </Button>
      </form>
      <p className="text-center w-full">
        Don&apos;t Have Account?{" "}
        <a href="#" className="text-blue-500">
          Register
        </a>
      </p>
    </AuthContainer>
  );
}
