import { getCurrentYear } from "@/lib/date";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background mt-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-2 p-4 text-center text-sm text-muted-foreground">
        <p className="font-semibold">TodoApp</p>
        <p>Stay organized. Get things done.</p>
        <p className="text-xs">
          &copy; {getCurrentYear()} TodoApp. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
