import React from "react";

interface Lifter {
  name: string;
  squat: number;
  bench: number;
  deadlift: number;
}

interface RecordsTableProps {
  lifters: Lifter[];
}

const RecordsTable: React.FC<RecordsTableProps> = ({ lifters }) => {
  const sortedLifters = [...lifters].sort(
    (a, b) => b.squat + b.bench + b.deadlift - (a.squat + a.bench + a.deadlift)
  );

  return (
    <>
      {sortedLifters.length === 0 ? (
        <p>No records to display.</p>
      ) : (
        <ul>
          {sortedLifters.map((lifter, index) => (
            <li key={index}>
              {lifter.name}: Squat: {lifter.squat}kg, Bench: {lifter.bench}kg,
              Deadlift: {lifter.deadlift}kg, Total:{" "}
              {lifter.squat + lifter.bench + lifter.deadlift}kg
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default RecordsTable;
