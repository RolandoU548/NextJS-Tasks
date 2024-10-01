import { modificateTask } from "../actions/modificateTask";
import Tasks from "../ui/components/Tasks";
import { Suspense } from "react";

export const revalidate = 0;

export default async function specificTask({ params }) {
  const res = await fetch(`http://localhost:3000/api/tasks/${params.taskId}`, {
    method: "GET",
    mode: "same-origin",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const task = await res.json();
  return (
    <div className="p-10">
      <form
        className="grid grid-cols-1 gap-5 bg-slate-800 rounded border border-white"
        action={async (formData) => {
          "use server";
          modificateTask(formData, task.id);
        }}
      >
        <h1 className="border-b border-white py-5 p-2 text-center text-2xl">
          ID de la Tarea: <span className="font-bold">{task.id}</span>
        </h1>
        <fieldset className="px-5 flex-col flex gap-3">
          <label htmlFor="title">Title</label>
          <input
            className="border-b border-white p-2 text-black"
            placeholder={task.title}
            name="title"
            id="title"
          ></input>
          <label htmlFor="description">Description</label>
          <input
            className="border-b border-white p-2 text-black"
            placeholder={task.description}
            name="description"
            id="description"
          ></input>
          <label htmlFor="createdAt">Created At</label>
          <input
            className="p-2 text-black"
            placeholder={task.createdAt}
            name="createdAt"
            id="createdAt"
          ></input>
        </fieldset>
        <button type="submit" className="py-5 bg-blue-600 font-semibold">
          Enviar
        </button>
      </form>

      <Suspense
        fallback={
          <h1 className="text-center font-semibold text-3xl">
            Cargando Tareas...
          </h1>
        }
      >
        <Tasks />
      </Suspense>
    </div>
  );
}
