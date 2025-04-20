import  { useEffect, useRef } from "react";

const useClickOutSide = (handler: () => void) => {
  const ref = useRef<HTMLElement | HTMLDivElement | null>(null);
  useEffect(() => {
    function handelClickOutsid(e: MouseEvent) {
      if (ref.current && !ref.current?.contains(e.target as Node)) {
        handler();
      }
    }
    document.addEventListener("mousedown", handelClickOutsid);
    return () => document.removeEventListener("mousedown", handelClickOutsid);
  }, [handler]);
  return ref;
};

export default useClickOutSide;
