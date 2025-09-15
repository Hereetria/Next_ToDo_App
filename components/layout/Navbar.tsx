"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Loader2 } from "lucide-react";

export default function Navbar() {
  const { data: session } = useSession();
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = () => {
    setLoggingOut(true);
    signOut({ callbackUrl: "/" });
  };

  return (
    <nav className="w-full border-b bg-background">
      <div className="max-w-4xl mx-auto flex items-center justify-between p-2">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <Link href="/" className="font-semibold hover:text-gray-700">
            Home
          </Link>
          <Link href="/tasks" className="font-semibold hover:text-gray-700">
            Tasks
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          {session ? (
            <>
              <span className="text-sm font-medium pr-2">
                Welcome {session.user?.name}
              </span>
              <Button
                variant="destructive"
                onClick={handleLogout}
                disabled={loggingOut}
              >
                {loggingOut ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  "Logout"
                )}
              </Button>
            </>
          ) : (
            !loggingOut && (
              <>
                <Button asChild variant="outline">
                  <Link href="/signup">Sign Up</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/login">Login</Link>
                </Button>
              </>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
