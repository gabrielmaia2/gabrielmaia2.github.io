import { useDocumentTitle } from "usehooks-ts";

export default function useTitleCustom(title: string) {
  useDocumentTitle(`${title} - Gabriel Maia`);
}
