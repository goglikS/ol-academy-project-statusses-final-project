export const statusses = [
  { id: 0, statusName: "❌❌Not Checked❌❌" },
  { id: 1, statusName: "🚫🚫Fail🚫🚫" },
  { id: 2, statusName: "🔧🔧 Need to Fix🔧🔧" },
  { id: 3, statusName: "✔️✔️Need to Improve✔️✔️" },
  { id: 4, statusName: "✅✅Done✅✅" },
];

export const clearStorage = () => {
  let removeList = [
    "groupName",
    "studentData",
    "studentsData",
    "taskData",
    "resultsData",
    "results",
  ];
  removeList.forEach((k) => localStorage.removeItem(k));
};

export const navLinks = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/projects",
    text: "Projects",
  },
];
