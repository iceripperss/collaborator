export const getTotalTransfers = <T extends { transfers: string[] }[]>(details: T): number =>
  details.reduce((total, detail) => total + (detail.transfers ? detail.transfers.length : 0), 0);
