import { UserButton } from "@clerk/nextjs";

import { ModeToggle } from "@/components/mode-toggle";

const state = true

export default function Home() {
  return (
    <main className="">
      <h2 className="text-3xl font-bold text-indigo-500">Home page</h2>
      <UserButton afterSignOutUrl="/" />
      <ModeToggle/>
    </main>
  )
}
