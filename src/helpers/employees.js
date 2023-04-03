const findAllOverlapEmployees = (employees) => {
  return employees.flatMap((firstEmp, i) =>
    employees.slice(i + 1).flatMap((secondEmp) => {
      if (
        firstEmp.empId !== secondEmp.empId &&
        firstEmp.projectId === secondEmp.projectId &&
        firstEmp.dateFrom <= secondEmp.dateTo &&
        secondEmp.dateFrom <= firstEmp.dateTo
      ) {
        const overlapDays = calculateOverlapDays(firstEmp, secondEmp);
        return [
          {
            firstEmpId: firstEmp.empId,
            secondEmpId: secondEmp.empId,
            projectId: firstEmp.projectId,
            overlapDays,
          },
        ];
      }
      return [];
    })
  );
}

const calculateOverlapDays = (firstEmp, secondEmp) => {
  const overlapStart = Math.max(firstEmp.dateFrom, secondEmp.dateFrom);
  const overlapEnd = Math.min(firstEmp.dateTo, secondEmp.dateTo);
  const overlapDays = Math.ceil(
    Math.max(0, overlapEnd - overlapStart) / (1000 * 60 * 60 * 24)
  );
  return overlapDays;
}

const getPairWithLongestWorkingTime = (teamsWorkingTogether) => {
  const longestProjects = new Map();

  teamsWorkingTogether.forEach((team) => {
    const empPair = [team.firstEmpId, team.secondEmpId];
    if (longestProjects[empPair] === undefined) {
      longestProjects[empPair] = team.overlapDays;
    } else {
      longestProjects[empPair] += team.overlapDays;
    }
  });

  const longestWorkingPair = Object.entries(longestProjects).reduce(
    (acc, [key, value]) =>
      value > acc[1] ? [key, value] : acc,
    ["", -Infinity]
  );
  return longestWorkingPair.length ? longestWorkingPair[0].split(",") : [];
}

export const findLongestWorkingEmployeePair = (employees) => {
  const teamsWorkingTogether = findAllOverlapEmployees(employees);
  const pairWithLongestWorkingTime = getPairWithLongestWorkingTime(teamsWorkingTogether);
  return teamsWorkingTogether.filter(
    (team) =>
      team.firstEmpId === pairWithLongestWorkingTime[0] &&
      team.secondEmpId === pairWithLongestWorkingTime[1]
  );
}