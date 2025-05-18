type Row = {
  year: number;
  area: string;
  price: number | null;
  demand: number | null;
  size: number | null;
};

const DataTable = ({ rows }: { rows: Row[] }) => (
  <table className="table-auto w-full border mt-4 text-left">
    <thead className="bg-gray-100">
      <tr>
        <th className="p-2 border">Year</th>
        <th className="p-2 border">Area</th>
        <th className="p-2 border">Price (₹/sqft)</th>
        <th className="p-2 border">Demand (Units)</th>
        <th className="p-2 border">Size (sqft)</th>
      </tr>
    </thead>
    <tbody>
      {rows.map((r, i) => (
        <tr key={i} className="hover:bg-gray-50">
          <td className="p-2 border">{r.year}</td>
          <td className="p-2 border">{r.area}</td>
          <td className="p-2 border">{r.price != null ? r.price.toLocaleString() : "N/A"}</td>
          <td className="p-2 border">{r.demand != null ? r.demand.toLocaleString() : "N/A"}</td>
          <td className="p-2 border">{r.size != null ? r.size.toLocaleString() : "N/A"}</td>
        </tr>
      ))}
    </tbody>
  </table>
);



export default DataTable;
