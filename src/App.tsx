import { ContactSection } from "@/components/Contact";
import { ExperienceSection } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { bio } from "@/data/experience";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero
          name={bio.name}
          headline={bio.headline}
          summary={bio.summary}
          photo={bio.photo}
        />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
