// Utility function to calculate time since starting trading (January 8, 2025)
export const calculateTimeSinceStart = (): string => {
  const startDate = new Date("2025-01-08");
  const currentDate = new Date();

  const yearDiff = currentDate.getFullYear() - startDate.getFullYear();
  const monthDiff = currentDate.getMonth() - startDate.getMonth();
  const dayDiff = currentDate.getDate() - startDate.getDate();

  let totalMonths = yearDiff * 12 + monthDiff;

  // If we haven't reached the same day of the month, subtract 1
  if (dayDiff < 0) {
    totalMonths -= 1;
  }

  // Ensure at least 1 month is shown
  totalMonths = Math.max(totalMonths, 1);

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) {
    // Less than 12 months: "8 months", "11 months"
    return `${totalMonths} ${totalMonths === 1 ? "month" : "months"}`;
  } else if (months === 0) {
    // Exactly 1 year, 2 years, etc: "1 year", "2 years"
    return `${years} ${years === 1 ? "year" : "years"}`;
  } else {
    // Mixed: "1 year 1 month", "2 years 3 months"
    const yearText = `${years} ${years === 1 ? "year" : "years"}`;
    const monthText = `${months} ${months === 1 ? "month" : "months"}`;
    return `${yearText} ${monthText}`;
  }
};
