interface ClientLayoutProps {
  children: React.ReactNode;
}
export const ClientLayoutComponent = ({ children }: ClientLayoutProps) => {
  return (
    <div>
      <h1>Client Layout</h1>
      {children}
    </div>
  );
};
