import React, { useState } from "react";
import Header from "./components/Header";
import Records from "./components/Records";
import AddLifter from "./components/AddLifter";

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
      <Header showAddLifter={showAddLifter} toggleAddLifter={toggleAddLifter} />
      <Records lifters={lifters} />
      {showAddLifter && (
        <AddLifter
          setLifters={setLifters}
          lifters={lifters}
          toggleAddLifter={toggleAddLifter}
        />
      )}
    </>
  );
};

export default App;
