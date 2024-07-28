import { useState } from "react";
import { lifters as initialLifters, Lifter } from "./data/records";
import Header from "./components/Header";
import Records from "./components/Records";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [lifters, setLifters] = useState<Lifter[]>(initialLifters);
  const [showAddLifter, setShowAddLifter] = useState(false);

  const toggleAddLifter = () => {
    setShowAddLifter(!showAddLifter);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-6">
        <Records
          lifters={lifters}
          showAddLifter={showAddLifter}
          toggleAddLifter={toggleAddLifter}
          setLifters={setLifters}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
