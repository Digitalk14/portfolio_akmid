import { navItems } from "./const";

export const Nav = ({
  scrollState,
}: {
  scrollState: [number, (value: number) => void];
}) => {
  const [scrollIndex, setScrollIndex] = scrollState;
  return (
    <div className="flex flex-col gap-6">
      {navItems.map(({ id, label }, index) => (
        <button
          key={id}
          className={`flex items-center  cursor-pointer gap-4 group ${
            scrollIndex === index ? "text-[#64ffda]" : ""
          }`}
          onClick={() => setScrollIndex(index)}
        >
          <div
            className={`w-12 h-[1px] group-hover:bg-[#64ffda] ${
              scrollIndex === index ? "bg-[#64ffda]" : "bg-[#8892b0]"
            }`}
          ></div>
          <span className=" font-mono group-hover:text-[#64ffda] text-sm">
            0{index + 1}.
          </span>
          <span
            className={`font-medium text-xl group-hover:text-[#64ffda] transition-colors `}
          >
            {label}
          </span>
        </button>
      ))}
    </div>
  );
};
