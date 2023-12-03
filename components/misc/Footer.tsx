import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" w-full h-fit flex gap-4 items-center justify-center py-2 lg:py-9">
      <span className=" w-fit h-fit">
        <Link
          href="/"
          className=" text-[10px] md:text-[11px] lg:text-[14px] text-neutral-200"
        >
          Tesla &copy; 2023
        </Link>
      </span>
      <span className=" w-fit h-fit">
        <Link
          href="/"
          className=" text-[10px] md:text-[11px] lg:text-[14px] text-neutral-200"
        >
          Privacy & Legal
        </Link>
      </span>
      <span className=" w-fit h-fit lg:flex hidden">
        <Link
          href="/"
          className=" text-[10px] md:text-[11px] lg:text-[14px] text-neutral-200"
        >
          Vehicle Recalls
        </Link>
      </span>
      <span className=" w-fit h-fit lg:flex hidden">
        <Link
          href="/"
          className=" text-[10px] md:text-[11px] lg:text-[14px] text-neutral-200"
        >
          Contact
        </Link>
      </span>
      <span className=" w-fit h-fit lg:flex hidden">
        <Link
          href="/"
          className=" text-[10px] md:text-[11px] lg:text-[14px] text-neutral-200"
        >
          News
        </Link>
      </span>
      <span className=" w-fit h-fit lg:flex hidden">
        <Link
          href="/"
          className=" text-[10px] md:text-[11px] lg:text-[14px] text-neutral-200"
        >
          Get Updates
        </Link>
      </span>
      <span className=" w-fit h-fit lg:flex hidden">
        <Link
          href="/"
          className=" text-[10px] md:text-[11px] lg:text-[14px] text-neutral-200"
        >
          Get Locations
        </Link>
      </span>
    </footer>
  );
};

export default Footer;
