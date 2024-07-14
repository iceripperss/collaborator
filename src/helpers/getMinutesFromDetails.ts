import { getMinutesFromDuration } from "@root/helpers/getMinutesFromDuration";

export const getMinutesFromDetails = <T extends { duration: string }[]>(details: T): number =>
  details.reduce((sum, detail) => sum + getMinutesFromDuration(detail.duration), 0);
