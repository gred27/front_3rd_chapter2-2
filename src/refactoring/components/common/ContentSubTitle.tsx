interface IContentSubTitleProps {
  title: string;
}
export const ContentSubTitle = ({ title }: IContentSubTitleProps) => {
  return <h2 className="text-2xl font-semibold mb-4">{title}</h2>;
};
