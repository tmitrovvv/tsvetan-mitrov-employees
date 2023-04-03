import React from "react";
import styled from "styled-components";

const TableWrapper = styled.div`
  width: 100%
`;

const Table = styled.table`
  width: 80%;
  border-collapse: collapse;
  margin: 0 auto;
  font-size: 1rem;
  color: #333;
`;

const TableHeader = styled.th`
  background-color: #eee;
  font-weight: bold;
  text-align: left;
  padding: 1rem;
`;

const TableData = styled.td`
  border-bottom: 1px solid #c0c0C0;
  text-align: left;
  padding: 1rem;
  font-weight: normal;
`;

const EmployeeTable = ({ data }) => {
  return (
    <>
      <h2>Pair of employees who have worked together on common projects for the longest period of time.</h2>
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <TableHeader>Employee ID #1</TableHeader>
              <TableHeader>Employee ID #2</TableHeader>
              <TableHeader>Project ID</TableHeader>
              <TableHeader>Days Worked</TableHeader>
            </tr>
          </thead>
          <tbody>
            {data.map((pair, index) => (
              <tr key={index}>
                <TableData>{pair.firstEmpId}</TableData>
                <TableData>{pair.secondEmpId}</TableData>
                <TableData>{pair.projectId}</TableData>
                <TableData>{pair.overlapDays}</TableData>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </>
  );
}

export default EmployeeTable;
