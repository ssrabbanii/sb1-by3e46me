export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const formatTime = (dateString: string): string => {
  return new Date(dateString).toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: 'numeric',
  });
};

export const addMinutes = (date: Date, minutes: number): Date => {
  return new Date(date.getTime() + minutes * 60000);
};