export const getAdminOverview = async () => {
  // Static data based on the provided dashboard image
  const data = {
    activeEmployees: 10,
    clockedInToday: 10,
    todaysWorkHours: 32.5,
    pendingEstimates: 2,

    employStatus: {
      active: 10,
      inactive: 2,
    },

    weeklyHoursTrend: [
      { day: "Mon", regular: 20, pw: 5, travel: 3, total: 28 },
      { day: "Tue", regular: 22, pw: 4, travel: 4, total: 30 },
      { day: "Wed", regular: 21, pw: 5, travel: 3, total: 29 },
      { day: "Thu", regular: 23, pw: 4, travel: 4, total: 31 },
      { day: "Fri", regular: 24, pw: 5, travel: 3.5, total: 32.5 },
      { day: "Sat", regular: 12, pw: 3, travel: 3, total: 18 },
    ],
  };

  return data;
};

export const AdminService = {
  getAdminOverview,
};
