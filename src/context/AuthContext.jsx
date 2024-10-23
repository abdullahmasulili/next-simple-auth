"use client";

import { auth } from "@/lib/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useReducer } from "react";

const AuthContext = createContext({
  user: null,
  setUser: () => {},
  setLoading: () => {},
  logout: () => {},
  loading: false,
});

function AuthReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "SET_USER":
      return {
        ...state,
        user: payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: payload,
      };
  }

  return state;
}

export default function AuthProvider({ children }) {
  const [authState, authDispatch] = useReducer(AuthReducer, {
    user: null,
    loading: false,
  });
  const router = useRouter();

  function setUser(userData) {
    authDispatch({
      type: "SET_USER",
      payload: userData,
    });
  }

  function setLoading(bool) {
    authDispatch({
      type: "SET_LOADING",
      payload: bool,
    });
  }

  async function logout() {
    await signOut(auth);
    router.push("/login");
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const token = await currentUser.getIdToken();
        document.cookie = `token=${token}; path=/`;
        setUser(currentUser);
      } else {
        document.cookie = "token=; Max-Age=0; path=/";
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const contextValues = {
    user: authState.user,
    loading: authState.loading,
    setLoading,
    setUser,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
