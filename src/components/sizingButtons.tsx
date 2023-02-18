export default function SizingButtons() {
  return (
    <div className="flex row items-center justify-between w-12 absolute top-3.5 left-3.5 z-10" >
        <div className="w-3 h-3 bg-[#ED6A5E] border-[0.0625rem] border-[#D55F55] rounded-[50%]" />
        <div className="w-3 h-3 bg-[#F4BD50] border-[0.0625rem] border-[#DCAA48] rounded-[50%]" />
        <div className="w-3 h-3 bg-[#61C454] border-[0.0625rem] border-[#57B04C] rounded-[50%]" />
    </div>
  );
}