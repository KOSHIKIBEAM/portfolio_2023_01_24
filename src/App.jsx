import Header from "./components/Header";
import Footer from "./components/Footer";
import SkillsSection from "./components/SkillsSection";
import WorkSection from "./components/WorkSection";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <div className="bg-slate-50 text-slate-950 dark:bg-slate-900 dark:text-slate-50 selection:bg-teal-300 selection:text-teal-900">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 ">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <SkillsSection />
            <WorkSection />
            <AboutSection />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
