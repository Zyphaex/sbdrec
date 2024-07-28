import { Lifter } from "../data/records";

interface RecordsTableProps {
  lifters: Lifter[];
}

const RecordsTable: React.FC<RecordsTableProps> = ({ lifters }) => {
  const sortedLifters = [...lifters].sort(
    (a, b) => b.squat + b.bench + b.deadlift - (a.squat + a.bench + a.deadlift),
  );

  return (
    <div className="w-full">
      {sortedLifters.length === 0 ? (
        <p className="text-center text-gray-500">No records to display.</p>
      ) : (
        <table className="w-full table-auto border-collapse border border-gray-300 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Squat</th>
              <th className="border border-gray-300 px-4 py-2">Bench</th>
              <th className="border border-gray-300 px-4 py-2">Deadlift</th>
              <th className="border border-gray-300 px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {sortedLifters.map((lifter, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-100"
                } hover:bg-blue-50`}
              >
                <td className="border border-gray-300 px-4 py-2">
                  {lifter.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {lifter.squat !== undefined ? `${lifter.squat} kg` : "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {lifter.bench !== undefined ? `${lifter.bench} kg` : "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {lifter.deadlift !== undefined
                    ? `${lifter.deadlift} kg`
                    : "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {lifter.squat + lifter.bench + lifter.deadlift} kg
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RecordsTable;
