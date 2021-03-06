import React from "react";

const ComplexityTable = () => (
  <div id="complexityTableP">
    <table className="table-bordered table table-striped text-center mt-2  table-dark">
      <thead>
        <tr>
          <th>Algorithm</th>
          <th>Time</th>
          <th>Space</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-warning">Dijkstras</td>
          <td>O(E + V&times;LogV)</td>
          <td>O(V)</td>
        </tr>
        <tr>
          <td className="text-warning">BFS</td>
          <td>
            O(V + E)
          </td>
          <td>
            O(V)
          </td>
        </tr>
        <tr>
          <td className="text-warning">DFS</td>
          <td>
            O(V + E)
          </td>
          <td>
            O(V)
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default ComplexityTable;
