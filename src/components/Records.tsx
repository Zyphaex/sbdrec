import RecordsTable from "./RecordsTable";
import AddLifter from "./AddLifter";
import { Lifter } from "../data/records";

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
    <section className="w-full max-w-4xl rounded-lg bg-white p-6 shadow-md">
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-semibold text-gray-800">Records</h2>
        <nav className="mt-4">
          <button
            onClick={toggleAddLifter}
            className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            {showAddLifter ? "Hide Add Lifter" : "Add Lifter"}
          </button>
        </nav>
      </div>
      {showAddLifter && (
        <div className="mt-6">
          <AddLifter
            setLifters={setLifters}
            lifters={lifters}
            toggleAddLifter={toggleAddLifter}
          />
        </div>
      )}
      <div className="mt-6">
        <RecordsTable lifters={lifters} />
      </div>
    </section>
  );
};

export default Records;
