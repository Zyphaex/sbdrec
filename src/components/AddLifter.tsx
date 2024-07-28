import { useState } from "react";

interface Lifter {
  name: string;
  squat: number;
  bench: number;
  deadlift: number;
}

interface AddLifterProps {
  setLifters: React.Dispatch<React.SetStateAction<Lifter[]>>;
  lifters: Lifter[];
  toggleAddLifter: () => void;
}

const AddLifter: React.FC<AddLifterProps> = ({
  setLifters,
  lifters,
  toggleAddLifter,
}) => {
  const [name, setName] = useState("");
  const [squat, setSquat] = useState("");
  const [bench, setBench] = useState("");
  const [deadlift, setDeadlift] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newLifter: Lifter = {
      name,
      squat: parseInt(squat),
      bench: parseInt(bench),
      deadlift: parseInt(deadlift),
    };
    setLifters([...lifters, newLifter]);
    toggleAddLifter();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-lg flex-col items-center rounded-lg bg-gray-100 p-6 shadow-md"
    >
      <fieldset className="flex w-full flex-col items-center justify-center gap-6">
        <legend className="text-lg font-semibold text-gray-800">
          Add Lifter
        </legend>
        <div className="flex w-full flex-col items-start">
          <label htmlFor="name" className="mb-1 font-medium text-gray-700">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            pattern="^[a-zA-Z]+([ ][a-zA-Z]+)*$"
            title="Please enter a valid name (letters and spaces only)."
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div className="flex w-full flex-row items-center justify-between gap-4">
          <div className="flex flex-1 flex-col items-start">
            <label htmlFor="squat" className="mb-1 font-medium text-gray-700">
              Squat (kg)
            </label>
            <input
              id="squat"
              type="number"
              value={squat}
              className="w-full rounded border border-gray-300 px-3 py-2 text-right focus:ring-2 focus:ring-blue-400 focus:outline-none"
              min="0"
              max="500"
              step="2.5"
              placeholder="kg"
              pattern="^[0-9]+(\\.[0-9]{1,2})?$"
              onChange={(e) => setSquat(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-1 flex-col items-start">
            <label htmlFor="bench" className="mb-1 font-medium text-gray-700">
              Bench Press (kg)
            </label>
            <input
              id="bench"
              type="number"
              value={bench}
              className="w-full rounded border border-gray-300 px-3 py-2 text-right focus:ring-2 focus:ring-blue-400 focus:outline-none"
              min="0"
              max="500"
              step="2.5"
              placeholder="kg"
              pattern="^[0-9]+(\\.[0-9]{1,2})?$"
              onChange={(e) => setBench(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-1 flex-col items-start">
            <label
              htmlFor="deadlift"
              className="mb-1 font-medium text-gray-700"
            >
              Deadlift (kg)
            </label>
            <input
              id="deadlift"
              type="number"
              value={deadlift}
              className="w-full rounded border border-gray-300 px-3 py-2 text-right focus:ring-2 focus:ring-blue-400 focus:outline-none"
              min="0"
              max="500"
              step="2.5"
              placeholder="kg"
              pattern="^[0-9]+(\\.[0-9]{1,2})?$"
              onChange={(e) => setDeadlift(e.target.value)}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full cursor-pointer rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          Add Lifter
        </button>
      </fieldset>
    </form>
  );
};

export default AddLifter;
