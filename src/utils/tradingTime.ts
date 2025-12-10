// Trading start date: January 8, 2025
const TRADING_START_DATE = new Date(2025, 0, 8); // Month is 0-indexed (0 = January)

// Calculate time since trading started (January 8, 2025)
export const calculateTimeSinceStart = (): string => {
  const currentDate = new Date();

  // Calculate calendar months difference
  let months =
    (currentDate.getFullYear() - TRADING_START_DATE.getFullYear()) * 12;
  months += currentDate.getMonth() - TRADING_START_DATE.getMonth();

  // Calculate remaining days
  let days = currentDate.getDate() - TRADING_START_DATE.getDate();

  // Adjust if days is negative (haven't reached the day of month yet)
  if (days < 0) {
    months--;
    // Get days in the previous month
    const prevMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    );
    days += prevMonth.getDate();
  }

  if (months >= 1) {
    if (days > 0) {
      return `${months} month${months > 1 ? "s" : ""}, ${days} day${
        days > 1 ? "s" : ""
      }`;
    } else {
      return `${months} month${months > 1 ? "s" : ""}`;
    }
  } else {
    // Calculate total days for periods less than a month
    const diffTime = Math.abs(
      currentDate.getTime() - TRADING_START_DATE.getTime()
    );
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays} day${diffDays > 1 ? "s" : ""}`;
  }
};

// Alternative version that shows weeks for shorter periods
export const calculateTimeSinceStartDetailed = (): string => {
  const currentDate = new Date();

  // Calculate calendar months and years
  let totalMonths =
    (currentDate.getFullYear() - TRADING_START_DATE.getFullYear()) * 12;
  totalMonths += currentDate.getMonth() - TRADING_START_DATE.getMonth();

  let days = currentDate.getDate() - TRADING_START_DATE.getDate();
  if (days < 0) {
    totalMonths--;
    const prevMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    );
    days += prevMonth.getDate();
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years >= 1) {
    return `${years} year${years > 1 ? "s" : ""}${
      months > 0 ? `, ${months} month${months > 1 ? "s" : ""}` : ""
    }`;
  } else if (months >= 1) {
    return `${months} month${months > 1 ? "s" : ""}${
      days > 0 ? `, ${days} day${days > 1 ? "s" : ""}` : ""
    }`;
  } else if (days >= 7) {
    const weeks = Math.floor(days / 7);
    const remainingDays = days % 7;
    return `${weeks} week${weeks > 1 ? "s" : ""}${
      remainingDays > 0
        ? `, ${remainingDays} day${remainingDays > 1 ? "s" : ""}`
        : ""
    }`;
  } else {
    return `${days} day${days > 1 ? "s" : ""}`;
  }
};

// Simple version that just shows "X months trading"
export const getSimpleTradingDuration = (): string => {
  const currentDate = new Date();

  // Calculate calendar months
  let months =
    (currentDate.getFullYear() - TRADING_START_DATE.getFullYear()) * 12;
  months += currentDate.getMonth() - TRADING_START_DATE.getMonth();

  // Adjust if we haven't reached the start day yet this month
  if (currentDate.getDate() < TRADING_START_DATE.getDate()) {
    months--;
  }

  if (months >= 1) {
    return `${months}+ Months Trading`;
  } else {
    const diffTime = Math.abs(
      currentDate.getTime() - TRADING_START_DATE.getTime()
    );
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays} Days Trading`;
  }
};
