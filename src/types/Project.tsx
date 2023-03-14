import Tag from "./Tag";

type Project = {
  name: string;
  tags?: Tag[];
  imgUrl?: string;
  element: JSX.Element;
};

export default Project;
