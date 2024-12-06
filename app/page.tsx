import About from "@/components/About";
import Hero from "@/components/Hero";
import Price from "@/components/Price";

export default function Home() {
  return (
    <div>
      <div className="h-screen">
        <Hero />
        <About />
        <Price />
      </div>
    </div>
  );
}
