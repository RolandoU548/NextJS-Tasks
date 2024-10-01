import AddForm from "./ui/components/AddForm";
import Tasks from "./ui/components/Tasks";

export const revalidate = 0;

export default function Home() {
  return (
    <div className="p-10">
      <AddForm />
      <Tasks />
    </div>
  );
}
