const LoadingScreen = ({ className = "", ...other }: any) => {
  const content = (
    <div
      className={`px-5 w-full min-h-full flex flex-1 items-center justify-center ${className}`}
      {...other}
    >
      <div className="w-full max-w-[360px] animate-pulse h-1 bg-gray-300 rounded-full relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-500 animate-[loading_1.5s_infinite]" />
      </div>
    </div>
  );

  return content;
};

export default LoadingScreen;
