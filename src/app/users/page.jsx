"use client";

import Button from "@/components/Button";
import { useAuth } from "@/context/AuthContext";
import React from "react";

export default function Users() {
  const { user, logout } = useAuth();

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quo
        numquam reiciendis, voluptatum debitis minus rerum impedit nostrum quasi
        eligendi sint dicta culpa molestiae ea. Soluta voluptatibus eos
        architecto velit.
      </p>
      <Button onClick={() => logout()}>Logout</Button>
    </div>
  );
}
