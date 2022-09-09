import { getBio } from '../../api';

export const about = async (args: string[]): Promise<string> => {
  return `
  Wget headers is a student run CTF team started in 2022,
  consisting of computer science students from NTNU Ålesund.
  `;
};
