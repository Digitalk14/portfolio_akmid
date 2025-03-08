import { navItems } from "./const";

export const Nav = ({
  scrollState,
}: {
  scrollState: [number, (value: number) => void];
}) => {
  const [scrollIndex, setScrollIndex] = scrollState;
  return (
    <div className="hidden md:flex flex-col gap-6">
      {navItems.map(({ id, label }, index) => (
        <button
          key={id}
          className={`flex items-center  cursor-pointer gap-4 group ${
            scrollIndex === index ? "text-[#0d9272]" : ""
          }`}
          onClick={() => setScrollIndex(index)}
        >
          <div
            className={`w-12 h-[1px] group-hover:bg-[#0d9272] ${
              scrollIndex === index ? "bg-[#0d9272]" : "bg-[#454f6e]"
            }`}
          ></div>
          <span className=" font-mono group-hover:text-[#0d9272] text-sm">
            0{index + 1}.
          </span>
          <span
            className={`font-medium text-xl group-hover:text-[#0d9272] transition-colors `}
          >
            {label}
          </span>
        </button>
      ))}
    </div>
  );
};
