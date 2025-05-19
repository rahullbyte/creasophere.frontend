type Row = {
  year: number;
  area: string;
  price: number | null;
  demand: number | null;
  size: number | null;
};

const DataTable = ({ rows }: { rows: Row[] }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <thead className="bg-gray-100 text-gray-700">
        <tr>
          <th className="px-4 py-3 border-b">Year</th>
          <th className="px-4 py-3 border-b">Area</th>
          <th className="px-4 py-3 border-b">Price (₹/sqft)</th>
          <th className="px-4 py-3 border-b">Demand (Units)</th>
          <th className="px-4 py-3 border-b">Size (sqft)</th>
        </tr>
      </thead>
      <tbody className="text-gray-800 bg-white">
        {rows.map((r, i) => (
          <tr key={i} className="hover:bg-gray-50 transition">
            <td className="px-4 py-2 border-t">{r.year}</td>
            <td className="px-4 py-2 border-t">{r.area}</td>
            <td className="px-4 py-2 border-t">
              {r.price != null ? r.price.toLocaleString(undefined, { maximumFractionDigits: 2 }) : "N/A"}
            </td>
            <td className="px-4 py-2 border-t">
              {r.demand != null ? r.demand.toLocaleString() : "N/A"}
            </td>
            <td className="px-4 py-2 border-t">
              {r.size != null ? r.size.toLocaleString() : "N/A"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default DataTable;
