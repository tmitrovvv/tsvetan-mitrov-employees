import React, { useState } from "react";
import Papa from "papaparse";
import FileInput from "./components/FileInput";
import EmployeeTable from "./components/EmployeeTable";
import styled from "styled-components";
import { findLongestWorkingEmployeePair } from "./helpers/employees"

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100vh;
`;

const EmployeeApp = () => {
  const [employeePair, setEmployeePair] = useState([]);

  const handleFileUpload = (event) => {
    Papa.parse(event.target.files[0], {
      delimiter: ",",
      skipEmptyLines: true,
      complete: (results) => {
        const parsedCSVData = results.data.map((row) => { 
          return {
              empId: row[0].trim(),
              projectId: row[1].trim(),
              dateFrom: new Date(row[2]).setHours(0, 0, 0, 0),
              dateTo: row[3].trim() === 'NULL' ? new Date().setHours(0, 0, 0, 0) : new Date(row[3]).setHours(0, 0, 0, 0)
            }
          }
        )
        const longestWorkingEmployeePair = findLongestWorkingEmployeePair(parsedCSVData);
        setEmployeePair(longestWorkingEmployeePair);
      },
    });
  }

  return (
    <AppContainer>
      <FileInput onChange={handleFileUpload} />
      <EmployeeTable data={employeePair} />
    </AppContainer>
  );
}

export default EmployeeApp
