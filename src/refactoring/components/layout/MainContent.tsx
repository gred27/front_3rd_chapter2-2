interface IMainContentProps {
  children: React.ReactNode;
}

export const MainContent: React.FC<IMainContentProps> = ({ children }) => {
  return <main className="container mx-auto mt-6">{children}</main>;
};
