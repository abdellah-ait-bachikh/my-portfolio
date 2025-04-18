"use client"
import { createContext, useContext, useState } from "react";

interface TnavigationContext {
  activeLink: string;
  setActiveLink: (link: string) => void;
}
const NavigationLinkContext = createContext<TnavigationContext | undefined>(
  undefined
);

const NavigationContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeLink, setActiveLink] = useState("");
  return (
    <NavigationLinkContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </NavigationLinkContext.Provider>
  );
};

export function useNavigationLink() {
  const context = useContext(NavigationLinkContext);
  if (!context) {
    throw Error("context must be wrapp all the app");
  }
  return context;
}
export default NavigationContextProvider;
