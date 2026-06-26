"use client"; //  Mark this as a client component

import { useEffect } from "react";

export default function DisableRightClick() {
  useEffect(() => {
    const disableContextMenu = (event: MouseEvent) => event.preventDefault();
    document.addEventListener("contextmenu", disableContextMenu);

    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
    };
  }, []);

  return null; // No UI, just runs the effect
}
