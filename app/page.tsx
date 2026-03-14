import Navbar           from "@/components/ui/Navbar";
import Hero             from "@/components/sections/Hero";
import ProblemSection   from "@/components/sections/ProblemSection";
import UserSegments     from "@/components/sections/UserSegments";
import ConversionFunnel from "@/components/sections/ConversionFunnel";
import WhyDropOff       from "@/components/sections/WhyDropOff";
import ProductSolutions from "@/components/sections/ProductSolutions";
import Roadmap          from "@/components/sections/Roadmap";
import MetricsDashboard from "@/components/sections/MetricsDashboard";
import FinalCTA         from "@/components/sections/FinalCTA";
import Footer           from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative bg-re-black">
      <Navbar />
      <Hero />
      <ProblemSection />
      <UserSegments />
      <ConversionFunnel />
      <WhyDropOff />
      <ProductSolutions />
      <Roadmap />
      <MetricsDashboard />
      <FinalCTA />
      <Footer />
    </main>
  );
}
