import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <FloatingNav 
          navItems={
            [{ name: 'Home', link: '/', icon: <FaHome/> }]
          }
        />
        <Hero />
      <div className="max-w-7xl w-full mx-auto sm:px-10 px-5">
        <Grid />
        <RecentProject />
      </div>
    </main>
  );
}
