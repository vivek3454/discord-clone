import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <section className="text-3xl font-bold text-indigo-500">
      This is protected route.
      <UserButton afterSignOutUrl="/" />
    </section>
  );
}
