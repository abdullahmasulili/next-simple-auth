import React, { createContext, useContext, useReducer } from "react";

const AuthContext = createContext({
  user: null,
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

  function setUser(user) {
    authDispatch({
      type: "SET_USER",
      payload: user,
    });
  }

  function setLoading(bool) {
    authDispatch({
      type: "SET_LOADING",
      payload: bool,
    });
  }

  const contextValues = {
    user: authState.user,
    loading: authState.loading,
    setLoading,
    setUser,
  };

  return (
    <AuthContext.Provider value={initialValues}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
