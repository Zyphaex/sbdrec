import { useState } from "react";
import Header from "./components/Header";
import Records from "./components/Records";
import Footer from "./components/Footer";

interface Lifter {
  name: string;
  squat: number;
  bench: number;
  deadlift: number;
}

const App: React.FC = () => {
  const [lifters, setLifters] = useState<Lifter[]>([]);
  const [showAddLifter, setShowAddLifter] = useState(false);

  const toggleAddLifter = () => {
    setShowAddLifter(!showAddLifter);
  };

  return (
    <>
      <Header />
      <Records
        lifters={lifters}
        showAddLifter={showAddLifter}
        toggleAddLifter={toggleAddLifter}
        setLifters={setLifters}
      />
      <Footer />
    </>
  );
};

export default App;
