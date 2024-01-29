import type { iCourse } from "~/types/Course";

export const useDateFormat = (period: iCourse["period"]) => {
  const months = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  const formattedStartDate = `${
    months[period.start.getUTCMonth()]
  } ${period.start.getUTCDate()}`;
  const formattedEndDate = `${
    months[period.end.getUTCMonth()]
  } ${period.end.getUTCDate()}`;

  const formattedPeriod = `${formattedStartDate} - ${formattedEndDate}`;

  return formattedPeriod;
};
