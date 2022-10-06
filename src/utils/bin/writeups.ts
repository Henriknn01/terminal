import { getWriteups, getCtfChallenges } from "../../api";

export const writeups = async (args: string[]): Promise<string> => {
  const arg_list = args.join('+').split('+');
  if (arg_list[0] == '-help' || arg_list[0] == '-h') {
    return `
    writeups [ctf]
    arguments:
      [ctf]       | select ctf to list solutions from.    example: writeups ctf_name
    `;
  }
  const ctf = arg_list[0];

  let writeup_list = [];

  if (ctf) {
    writeup_list = await getCtfChallenges(ctf);
  } else {
    writeup_list = await getWriteups();
    writeup_list = writeup_list
      .filter((writeup) => writeup.name !== 'README.md')
      .filter((writeup) => writeup.name !== 'ctf_name-year');
  }

  return (
    'type -help or -h to display options \n\n' +
    writeup_list
      .map(
        (writeup) =>
          `${writeup.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${writeup.html_url}" target="_blank">${writeup.html_url}</a>`,
      )
      .join('\n')
  );
};
