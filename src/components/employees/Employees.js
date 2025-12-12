import React, { useEffect, useState } from "react";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const res = await fetch("/db.json");
        if (!res.ok) {
          throw new Error("Failed to load employees data");
        }
        const data = await res.json();

        // data.employees includes a nested array as the last element, so flatten it
        let list = Array.isArray(data.employees) ? data.employees : [];
        // Use flat() if available, otherwise manually flatten
        list = list.flat
          ? list.flat()
          : list.reduce((acc, item) => {
              return acc.concat(item);
            }, []);

        setEmployees(list);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    loadEmployees();
  }, []);

  if (loading) {
    return <div className="p-4">Loading employees...</div>;
  }

  if (error) {
    return (
      <div className="alert alert-danger m-4" role="alert">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="m-4 p-4 bg-light rounded-3 shadow-sm">
      <h2 className="mb-3">Employee Directory</h2>
      <p className="text-muted mb-4">
        Data loaded from <code>db.json</code> and displayed in a responsive
        table.
      </p>
      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Position</th>
              <th scope="col">Department</th>
              <th scope="col">Email</th>
              <th scope="col" className="text-end">
                Salary ($)
              </th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <th scope="row">{emp.id}</th>
                <td>{emp.name}</td>
                <td>{emp.position}</td>
                <td>{emp.department}</td>
                <td>
                  <a href={`mailto:${emp.email}`}>{emp.email}</a>
                </td>
                <td className="text-end">{emp.salary}</td>
                <td>
                  <span
                    className={`badge rounded-pill ${
                      emp.status === "Active" ? "bg-success" : "bg-secondary"
                    }`}
                  >
                    {emp.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
