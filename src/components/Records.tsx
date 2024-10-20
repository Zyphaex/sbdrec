import React from "react";
import RecordsTable from "./RecordsTable";
import AddLifter from "./AddLifter";

interface Lifter {
  name: string;
  squat: number;
  bench: number;
  deadlift: number;
}

interface RecordsProps {
  lifters: Lifter[];
  showAddLifter: boolean;
  toggleAddLifter: () => void;
  setLifters: React.Dispatch<React.SetStateAction<Lifter[]>>;
}

const Records: React.FC<RecordsProps> = ({
  lifters,
  showAddLifter,
  toggleAddLifter,
  setLifters,
}) => {
  return (
    <>
      <div className="col">
        <h2>Records</h2>
        <nav>
          <ul>
            <li>
              <button onClick={toggleAddLifter}>
                {showAddLifter ? "Hide Add Lifter" : "Add Lifter"}
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {showAddLifter && (
        <AddLifter
          setLifters={setLifters}
          lifters={lifters}
          toggleAddLifter={toggleAddLifter}
        />
      )}
      <RecordsTable lifters={lifters} />
    </>
  );
};

export default Records;
