import Header from "./components/Header";
import Footer from "./components/Footer";
import SkillsSection from "./components/SkillsSection";
import WorkSection from "./components/WorkSection";
import WorkList from "./data/WorkList";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <div className="bg-slate-50 capitalize font-font text-slate-700 dark:bg-blue-950 dark:text-slate-200 selection:text-sky-900 selection:bg-sky-200 dark:selection:bg-teal-300 dark:selection:text-teal-900">
      <div className="mx-auto min-h-screen max-w-screen-xl 2xl:max-w-screen-2xl px-3 sm:px-6 py-12 md:px-12 md:py-20 lg:px-12 lg:py-0 ">
        <div className="lg:flex lg:justify-between lg:gap-4 2xl:gap-10 ">
          <Header />
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <AboutSection />
            <SkillsSection />
            <WorkSection src={WorkList} />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
