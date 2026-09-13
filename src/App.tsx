import { Suspense } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TechnologyList from "./components/TechnologyList";
import technologiesPromise from "./data/technologiesPromise";

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Suspense
        fallback={
          <p className="text-center py-10 text-gray-500">
            Loading technologies...
          </p>
        }
      >
        <TechnologyList dataPromise={technologiesPromise()} />
      </Suspense>
    </div>
  );
}

export default App;