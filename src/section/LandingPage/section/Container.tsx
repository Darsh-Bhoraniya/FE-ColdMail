interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container = ({ className = "", children }: ContainerProps) => {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
