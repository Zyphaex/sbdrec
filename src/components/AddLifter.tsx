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
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add Lifter</legend>
        <div className="col">
          <label>Full Name</label>
          <input
            type="text"
            value={name}
            pattern="^[a-zA-Z]+([ ][a-zA-Z]+)*$"
            title="Please enter a valid name (letters and spaces only)."
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="row">
          <div className="col">
            <label>Squat</label>
            <input
              type="number"
              value={squat}
              className="kg"
              min="0"
              max="500"
              step="2.5"
              placeholder="kg"
              pattern="^[0-9]+(\\.[0-9]{1,2})?$"
              onChange={(e) => setSquat(e.target.value)}
              required
            />
          </div>
          <div className="col">
            <label>Bench Press</label>
            <input
              type="number"
              value={bench}
              className="kg"
              min="0"
              max="500"
              step="2.5"
              placeholder="kg"
              pattern="^[0-9]+(\\.[0-9]{1,2})?$"
              onChange={(e) => setBench(e.target.value)}
              required
            />
          </div>
          <div className="col">
            <label>Deadlift</label>
            <input
              type="number"
              value={deadlift}
              className="kg"
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
        <button type="submit">Add Lifter</button>
      </fieldset>
    </form>
  );
};

export default AddLifter;
