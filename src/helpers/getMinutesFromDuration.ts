export const getMinutesFromDuration = (duration: string) => {
  const durationArray = duration.split(":");

  return parseInt(durationArray[0], 10) * 60 + parseInt(durationArray[1], 10);
};
