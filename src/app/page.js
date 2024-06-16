import About from "@/components/About";
import Discover from "@/components/Discover";
import ExploreRooms from "@/components/ExploreRooms";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Layout>
        <Hero />
        <About />
        <ExploreRooms heading={"Explore Our ROOMS"} />
        <Discover />
        <Services />
        <Testimonials />
        <Gallery />
      </Layout>
    </main>
  );
}
