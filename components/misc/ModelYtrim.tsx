const ModelYtrim = () => {
  return (
    <div className="h-[120px] w-full flex flex-col gap-2 text-[16px] text-neutral-500 justify-start">
      <h3 className=" font-sans font-semibold text-[16px]">Trim</h3>
      <div className=" w-full h-full">
        <div className=" flex h-1/2 w-full items-center justify-start gap-1">
          <input className="" type="checkbox" name="" id="" />
          <label htmlFor="">Performance All-Wheel Drive</label>
        </div>
        <div className=" flex gap-1 h-1/2 w-full items-center justify-start">
          <input className="" type="checkbox" name="" id="" />
          <label htmlFor="">Long Range All-Wheel Drive</label>
        </div>
        <div className=" flex gap-1 h-1/2 w-full items-center justify-start">
          <input className="" type="checkbox" name="" id="" />
          <label htmlFor="">Model Y All-Wheel Drive</label>
        </div>
      </div>
    </div>
  );
};

export default ModelYtrim;
