export const HeroContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="sticky top-0 left-0 w-full h-screen max-h-screen overflow-hidden pt-[100px] ">
      <div className="h-full flex flex-col gap-[50px]">
        {children}
      </div>
    </div>
  );
};
