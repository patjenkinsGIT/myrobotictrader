// Calculate time since trading started (January 8, 2025)
export const calculateTimeSinceStart = (): string => {
  const startDate = new Date("2025-01-08");
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());

  // Calculate days
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // Calculate months (approximate)
  const diffMonths = Math.floor(diffDays / 30);
  const remainingDays = diffDays % 30;

  if (diffMonths >= 1) {
    if (remainingDays > 0) {
      return `${diffMonths} month${
        diffMonths > 1 ? "s" : ""
      }, ${remainingDays} day${remainingDays > 1 ? "s" : ""}`;
    } else {
      return `${diffMonths} month${diffMonths > 1 ? "s" : ""}`;
    }
  } else {
    return `${diffDays} day${diffDays > 1 ? "s" : ""}`;
  }
};

// Alternative version that shows weeks for shorter periods
export const calculateTimeSinceStartDetailed = (): string => {
  const startDate = new Date("2025-01-08");
  const currentDate = new Date();

  const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays >= 365) {
    const years = Math.floor(diffDays / 365);
    const remainingDays = diffDays % 365;
    const months = Math.floor(remainingDays / 30);
    return `${years} year${years > 1 ? "s" : ""}${
      months > 0 ? `, ${months} month${months > 1 ? "s" : ""}` : ""
    }`;
  } else if (diffDays >= 30) {
    const months = Math.floor(diffDays / 30);
    const remainingDays = diffDays % 30;
    return `${months} month${months > 1 ? "s" : ""}${
      remainingDays > 0
        ? `, ${remainingDays} day${remainingDays > 1 ? "s" : ""}`
        : ""
    }`;
  } else if (diffDays >= 7) {
    const weeks = Math.floor(diffDays / 7);
    const remainingDays = diffDays % 7;
    return `${weeks} week${weeks > 1 ? "s" : ""}${
      remainingDays > 0
        ? `, ${remainingDays} day${remainingDays > 1 ? "s" : ""}`
        : ""
    }`;
  } else {
    return `${diffDays} day${diffDays > 1 ? "s" : ""}`;
  }
};

// Simple version that just shows "X months trading"
export const getSimpleTradingDuration = (): string => {
  const startDate = new Date("2025-01-08");
  const currentDate = new Date();

  const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffDays / 30);

  if (diffMonths >= 1) {
    return `${diffMonths}+ Months Trading`;
  } else {
    return `${diffDays} Days Trading`;
  }
};
