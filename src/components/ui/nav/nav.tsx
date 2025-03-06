import Link from "next/link";

export const Nav = () => {
  return <div className="flex flex-col gap-6 mt-12">
  <Link href="#about" className="flex items-center gap-4 group">
    <div className="w-12 h-[1px] bg-[#64ffda]"></div>
    <span className="text-[#64ffda] font-mono text-sm">01.</span>
    <span className="font-medium text-xl text-[#ccd6f6] group-hover:text-[#64ffda] transition-colors">
      ABOUT
    </span>
  </Link>
  <Link href="#experience" className="flex items-center gap-4 group">
    <div className="w-12 h-[1px] bg-[#8892b0]"></div>
    <span className="text-[#8892b0] font-mono text-sm">02.</span>
    <span className="font-medium text-xl text-[#8892b0] group-hover:text-[#64ffda] transition-colors">
      EXPERIENCE
    </span>
  </Link>
  <Link href="#projects" className="flex items-center gap-4 group">
    <div className="w-12 h-[1px] bg-[#8892b0]"></div>
    <span className="text-[#8892b0] font-mono text-sm">03.</span>
    <span className="font-medium text-xl text-[#8892b0] group-hover:text-[#64ffda] transition-colors">
      PROJECTS
    </span>
  </Link>
</div>;
};
