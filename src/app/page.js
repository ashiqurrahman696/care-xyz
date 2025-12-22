import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Overview from "@/components/home/Overview";

export default function Home() {
  return (
    <div className="space-y-10">
      <Banner/>
      <About/>
      <Overview/>
    </div>
  );
}
