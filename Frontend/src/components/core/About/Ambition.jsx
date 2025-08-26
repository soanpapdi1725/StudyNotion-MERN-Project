const Ambition = ({
  title,
  data,
  data2 = null,
  backgroundGradient,
  specificStyling = null,
}) => {
  return (
    <div className={`flex flex-col gap-10 justify-start items-start lg:w-[50%] ${specificStyling}`}>
      <h1 className={`text-4xl text-start font-semibold ${backgroundGradient}`}>
        {title}
      </h1>
      <div className="flex flex-col gap-8">
        <p className="text-pure-greys-300">{data}</p>
        {data2 !== null && <p className="text-pure-greys-300">{data2}</p>}
      </div>
    </div>
  );
};

export default Ambition;
