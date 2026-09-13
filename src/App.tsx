import { Suspense } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TechnologyList from "./components/TechnologyList";
import technologiesPromise from "./data/technologiesPromise";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer/>
    </div>
  );
}

export default App;