import Link from "next/link";

export default function TaskCard({ id, title, description }) {
  return (
    <Link
      href={`/${id}`}
      className="group bg-slate-800 hover:bg-slate-700 rounded-lg hover:scale-105 border-white border hover:shadow-[0_0_20px_5px_rgba(170,170,170,0.5)] transition duration-500"
    >
      <h2 className="text-gray-200 group-hover:text-white p-5 text-xl text-center font-bold capitalize bg-slate-900 group-hover:bg-slate-800 rounded-t-lg">
        {title}
      </h2>
      <hr />
      <p className="m-6 capitalize text-gray-300 group-hover:text-white">
        <span className="text-lg">{description}</span> <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit quae
        sunt rem omnis labore sint accusamus qui odio magnam porro doloribus
        eligendi laborum nulla illo voluptatibus tempore harum recusandae ullam
        odit enim repellat, laudantium, unde a. Illo maiores quis architecto
        explicabo assumenda eius voluptatum? Molestiae nemo similique voluptates
        ratione necessitatibus?
      </p>
    </Link>
  );
}
