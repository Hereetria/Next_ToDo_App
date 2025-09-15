import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import CreateTaskForm from "../_components/CreateTaskForm";

export default async function CreateTaskPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4 flex-1">
      <h1 className="text-2xl font-bold mb-6 text-center">Create Task</h1>
      <CreateTaskForm userId={session.user.id} />
    </div>
  );
}
