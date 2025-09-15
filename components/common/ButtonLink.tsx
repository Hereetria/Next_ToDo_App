"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ButtonLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Button asChild size="lg">
      <Link href={href}>{children}</Link>
    </Button>
  );
}
