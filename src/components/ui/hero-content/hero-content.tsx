export const HeroContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="sticky top-0 left-0 w-full md:h-screen max-h-screen overflow-hidden pt-[48px] md:pt-[100px] ">
      <div className="h-full flex flex-col gap-[50px]">
        {children}
      </div>
    </div>
  );
};
