const Title = ({ title }: { title: string }) => {
  const theme = document.body.className;
  console.log(theme);
  return (
    <div className="bg-white/10 shadow-md border-t-[2px] border-b-[2px] w-full text-center">
      <h3 className="text-xl font-semibold uppercase">{title}</h3>
    </div>
  );
};

export default Title;
