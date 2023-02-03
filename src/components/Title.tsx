const Title = ({ title }: { title: string }) => {
  return (
    <div className="bg-white/70 shadow-md border-[2px] w-full text-center">
      <h3 className="text-xl font-semibold uppercase">{title}</h3>
    </div>
  );
};

export default Title;
