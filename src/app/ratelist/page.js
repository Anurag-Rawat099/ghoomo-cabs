import React from "react";

const ratesData = [
  { transport: "Sedan 2 Pax", cost: "28,500", sharing: "01 Double Room" },
  { transport: "Sedan 3 Pax", cost: "23,199", sharing: "01 Triple Room" },
  { transport: "Sedan 4 Pax", cost: "20,500", sharing: "02 Double Room" },
  { transport: "Ertiga 4 Pax", cost: "23,000", sharing: "02 Double Room" },
  {
    transport: "Ertiga 5 Pax",
    cost: "20,900",
    sharing: "01 Room Double & 01 Room Triple",
  },
  {
    transport: "Ertiga 6 Pax",
    cost: "19,500",
    sharing: "02 Room on Triple Room",
  },
  {
    transport: "Bolero 6 Pax",
    cost: "18,499",
    sharing: "02 Room on Triple Room",
  },
  {
    transport: "Bolero 8 Pax",
    cost: "17,499",
    sharing: "02 Room on Quad Room",
  },
  {
    transport: "Innova 6 Pax",
    cost: "20,000",
    sharing: "02 Room on Triple Room",
  },
  {
    transport: "Innova 7 Pax",
    cost: "19,000",
    sharing: "01 Room on Quad and 01 Room on Triple",
  },
  {
    transport: "Innova Crysta 6 Pax",
    cost: "22,000",
    sharing: "02 Room on Triple Room",
  },
  {
    transport: "Innova Crysta 7 Pax",
    cost: "20,500",
    sharing: "01 Room on Triple and 01 Room on Quad Room",
  },
  {
    transport: "12 Seater Tempo 8 Pax",
    cost: "22,000",
    sharing: "02 Room on Quad Room",
  },
  {
    transport: "12 Seater tempo 9 Pax",
    cost: "21,000",
    sharing: "03 Room on Triple Room",
  },
  {
    transport: "12 Seater Tempo 10 Pax",
    cost: "20,000",
    sharing: "02 Room on Quad and 01 Room on Double Room",
  },
  {
    transport: "12 Seater Tempo 12 Pax",
    cost: "19,000",
    sharing: "03 Room on Quad Room",
  },
  {
    transport: "17 Seater Tempo 14 Pax",
    cost: "19,000",
    sharing: "03 Room on Quad and 01 Room on Double Room",
  },
  {
    transport: "17 Seater Tempo 15 Pax",
    cost: "18,500",
    sharing: "03 Room on Quad and 01 Room on Triple Room",
  },
  {
    transport: "17 Seater Tempo 16 Pax",
    cost: "18,200",
    sharing: "04 Room on Quad Room",
  },
  {
    transport: "17 Seater Tempo 17 Pax",
    cost: "18,000",
    sharing: "03 Room on Quad and 02 Room on Triple & Double Room",
  },
  {
    transport: "20 Seater Tempo 18 Pax",
    cost: "18,000",
    sharing: "04 Room on Quad Room and 01 Room on Double",
  },
  {
    transport: "20 Seater Tempo 20 Pax",
    cost: "17,500",
    sharing: "05 Room on Quad Room",
  },
];

export default function ChardhamRatesTable() {
  return (
    <div className="w-full max-w-5xl mx-auto my-8 p-4 font-sans">
      <div className="overflow-x-auto border border-black shadow-md rounded-sm">
        <table className="w-full border-collapse text-center text-sm md:text-base">
          {/* Main Title Header */}
          <thead>
            <tr>
              <th
                colSpan={3}
                className="bg-yellow-300 border-b border-black py-3 px-4 text-center text-lg md:text-xl font-bold uppercase text-black"
              >
                Chardham Yatra 2026 Standard Package B2B Rates
              </th>
            </tr>
            {/* Column Headers */}
            <tr className="bg-yellow-200 text-black font-bold border-b border-black">
              <th className="border-r border-black py-2 px-3 w-1/3">
                Transport
              </th>
              <th className="border-r border-black py-2 px-3 w-1/3">
                Per Person Cost (₹)
              </th>
              <th className="py-2 px-3 w-1/3">Room Sharing</th>
            </tr>
          </thead>

          {/* Data Rows */}
          <tbody className="divide-y divide-black text-gray-900">
            {ratesData.map((row, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 transition-colors border-b border-black last:border-b-0"
              >
                <td className="border-r border-black py-1.5 px-3 font-medium text-left md:text-center">
                  {row.transport}
                </td>
                <td className="border-r border-black py-1.5 px-3 font-semibold">
                  {row.cost}
                </td>
                <td className="py-1.5 px-3 text-left md:text-center">
                  {row.sharing}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
