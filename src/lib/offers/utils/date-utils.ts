export const calculateTimeLeft = (expiresAt: string): {
  days: number;
  hours: number;
} => {
  const timeLeft = new Date(expiresAt).getTime() - Date.now();
  return {
    days: Math.ceil(timeLeft / (1000 * 60 * 60 * 24)),
    hours: Math.ceil(timeLeft / (1000 * 60 * 60)),
  };
};

export const formatTimeLeft = (expiresAt: string): string => {
  const { days, hours } = calculateTimeLeft(expiresAt);
  return days > 0 ? `${days} days` : `${hours} hours`;
};