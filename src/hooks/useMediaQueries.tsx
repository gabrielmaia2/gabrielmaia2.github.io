import { useMediaQuery } from "usehooks-ts";

// NOTE DONT input an array that is not constant while running the application!
// Returns the index of the first one that matches or -1 if none of them match.
export default function useMediaQueries(queries: string[]) {
  let match = -1;
  for (let i = 0; i < queries.length; i++) {
    const q = queries[i];

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const currMatch = useMediaQuery(q);
    if (match === -1 && currMatch) match = i;
  }

  return match;
}
