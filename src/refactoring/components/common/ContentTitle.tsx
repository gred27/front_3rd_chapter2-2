interface IContentTitleProps {
  title: string;
}

export const ContentTitle = ({ title }: IContentTitleProps) => {
  return <h1 className="text-3xl font-bold mb-6">{title}</h1>;
};
