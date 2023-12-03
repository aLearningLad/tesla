interface SmallTabsProps {
  title?: string;
  img?: React.ReactElement;
  desc: string;
}

const SmallTabs: React.FC<SmallTabsProps> = ({ desc, img, title }) => {
  return (
    <div className="h-fit w-fit flex flex-col mx-14">
      <div className="w-full h-1/2 flex justify-center">
        {title && <h3 className="text-white text-[26px] h-full">{title}</h3>}

        {img && <div className=" text-white h-full"> {img}</div>}
      </div>
      <div className=" w-full h-1/2 text-center flex justify-center">
        <p className="text-white line-clamp-2 w-[80px]">{desc}</p>
      </div>
    </div>
  );
};

export default SmallTabs;
