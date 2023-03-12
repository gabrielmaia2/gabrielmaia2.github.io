type Project = {
  name: string;
  tags?: { name: string; category: string }[];
  imgUrl?: string;
  element: JSX.Element;
};

export default Project;
