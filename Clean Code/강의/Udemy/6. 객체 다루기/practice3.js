// 3. Lookup Table

// Example 1

function getUserType(type) {
  if (type === "ADMIN") {
    return "관리자";
  }
  if (type === "INSTRUCTOR") {
    return "강사";
  }
  if (type === "STUDENT") {
    return "수강생";
  }
  if (type === "STUDENT1") {
    return "수강생1";
  }
  if (type === "STUDENT2") {
    return "수강생2";
  }
  return "해당 없음";
}

function fixedGetUserType(type) {
  const USER_TYPE = {
    ADMIN: "관리자",
    INSTRUCTOR: "강사",
    STUDENT: "수강생",
    UN: "해당 없음",
  };

  return USER_TYPE[type] ?? USER_TYPE.UN;
}
