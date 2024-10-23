"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

import Button from "@/components/Button";
import Input from "@/components/Input";
import AuthContainer from "@/layouts/AuthContainer";
import { signUp } from "@/lib/firebaseAuth";
import AuthProvider, { AuthContext, useAuth } from "@/context/AuthContext";

export default function Register() {
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
      await signUp(creds);
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
  });

  return (
    <AuthContainer>
      <form className="w-full" onSubmit={handleSubmit}>
        <Input id="email" name="email" label="Email" type="email" />
        <Input id="password" name="password" label="Password" type="password" />
        <Button block type="submit" disabled={loading}>
          Register
        </Button>
      </form>
      <p className="text-center w-full">
        Already Have Account?{" "}
        <Link href="/login" className="text-blue-500">
          Sign In
        </Link>
      </p>
    </AuthContainer>
  );
}
