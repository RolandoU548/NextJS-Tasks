export const modificateTask = async (formData, taskId) => {
  "use server";
  const title = formData.get("title");
  const description = formData.get("description");
  const createdAt = formData.get("createdAt");
  const modificatedTask = {
    id: taskId,
    title,
    description,
  };
  const res = await fetch(`http://localhost:3000/api/tasks/${taskId}`, {
    method: "PUT",
    body: JSON.stringify(modificatedTask),
    mode: "same-origin",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const task = await res.json();
  console.log(task);
};
