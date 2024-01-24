import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-slate-50 text-slate-950 leading-relaxed  antialiased selection:bg-teal-300 selection:text-teal-900 dark:bg-slate-900 dark:text-slate-400">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 ">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
