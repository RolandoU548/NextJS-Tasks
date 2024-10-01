"use client";

export default function AddForm() {
  const submit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const res = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <form onSubmit={submit} className="border border-1 rounded-lg">
      <fieldset className="flex flex-col gap-5 p-12 m-10">
        <h2 className="text-center text-xl font-semibold">Agregar Tareas</h2>
        <label htmlFor="title" className="font-semibold">
          Title
        </label>
        <input
          id="title"
          type="text"
          className="rounded-sm p-1 text-black"
          placeholder="Title"
        />
        <label htmlFor="description" className="font-semibold">
          Description
        </label>
        <textarea
          id="description"
          type="text"
          className="rounded-sm p-1 text-black"
          placeholder="Description"
          rows="3"
        />
        <input
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 transition rounded-sm font-medium p-3 cursor-pointer"
        />
      </fieldset>
    </form>
  );
}
