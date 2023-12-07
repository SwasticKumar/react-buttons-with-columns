import React from "react";

const Table = ({ columns }) => {
  var cols = [];
  for (let i = 1; i <= columns; i++) {
    cols.push(<td key={i}>Column {i}</td>);
  }

  return (
    <div className="table-container container">
      <div className="title mt-4">
        <h3>Table</h3>
      </div>
      {columns !== 0 ? (
        <>
          <table className="table table-light-yellow mt-4">
            <thead>
              <tr>{cols}</tr>
            </thead>
          </table>
        </>
      ) : (
        <p>Need to import column</p>
      )}
    </div>
  );
};

export { Table };
