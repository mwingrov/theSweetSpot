import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { FloatingButtons } from "./FloatingButtons";
import { useReveal } from "../hooks/use-reveal";
import { useRouterState } from "@tanstack/react-router";

export function Layout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useReveal(pathname);
  return (
    <>
      <Nav />
      <main key={pathname}>{children}</main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
