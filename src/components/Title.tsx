const Title = ({ title }: { title: string }) => {
  return (
    <div className="bg-blue-500 w-full text-center">
      <h3 className="text-xl font-semibold uppercase">{title}</h3>
    </div>
  );
};

export default Title;