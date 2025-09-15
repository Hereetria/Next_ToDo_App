import { ButtonLink } from "@/components/common/ButtonLink";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to Next-Todo-App</h1>
      <p className="text-muted-foreground mb-6 max-w-lg">
        Stay organized and boost your productivity with TodoApp. Create, manage, and
        track your tasks with ease.
      </p>
      <ButtonLink href="/tasks">Go to Tasks</ButtonLink>
    </div>
  );
}
