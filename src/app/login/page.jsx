"use client";

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import AuthContainer from "@/layouts/AuthContainer";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { login } from "@/lib/firebaseAuth";
import AuthProvider, { AuthContext, useAuth } from "@/context/AuthContext";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { setUser, user } = useAuth();

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);
    const creds = Object.fromEntries(formData.entries());

    try {
      await login(creds).then((userCredential) => {
        setUser(userCredential);
      });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user) {
      router.push("/users");
    }
  }, [user, router]);

  return (
    <AuthContainer>
      <form className="w-full" onSubmit={handleSubmit}>
        <Input id="email" name="email" label="Email" type="email" />
        <Input id="password" name="password" label="Password" type="password" />
        <Button block type="submit" disabled={loading}>
          Sign In
        </Button>
      </form>
      <p className="text-center w-full">
        Don&apos;t Have Account?{" "}
        <Link href="/register" className="text-blue-500">
          Register
        </Link>
      </p>
    </AuthContainer>
  );
}
