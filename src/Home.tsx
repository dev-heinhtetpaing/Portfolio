import { AboutSection } from "./pages/about-section"
import { ContactSection } from "./pages/contact-section"
import { ExperienceSection } from "./pages/experience-section"
import { HeroSection } from "./pages/hero-section"
import { PersonalitySection } from "./pages/personality-section"
import { ProjectsSection } from "./pages/projects-section"
import { ServicesSection } from "./pages/services-section"
import Skills from "./pages/skill-section"

const Home=()=>{
    return<>
    <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ServicesSection />
      <ProjectsSection />
      <PersonalitySection />
      <Skills />
      <ContactSection />
    </>
}
export default Home