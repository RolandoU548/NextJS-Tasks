import TaskCard from "@/app/ui/components/TaskCard";

export default async function Tasks() {
  const res = await fetch("http://localhost:3000/api/tasks", {
    method: "GET",
    mode: "same-origin",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const tasks = await res.json();
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,20rem),_1fr))] gap-10 mt-10">
      {tasks.map((task) => {
        return (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
          />
        );
      })}
    </div>
  );
}
