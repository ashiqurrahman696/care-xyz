import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Overview from "@/components/home/Overview";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="space-y-10">
      <Banner/>
      <About/>
      <Overview/>
      <Testimonials/>
    </div>
  );
}
