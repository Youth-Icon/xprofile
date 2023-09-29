"use client";

import { useContext, useState, createContext, useEffect } from "react";
import { auth, signInWithGoogle, db, logout } from "@/backend/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { onAuthStateChanged } from "firebase/auth";

// Create the context
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is signed in");
      } else {
        console.log("No user is signed in");
      }
    });
  }, [user, loading]);
  return (
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
