const SliderTab = ({
  element,
  currentTab,
  setMyData,
  style,
  
}) => {
  return (
    <div 
      className={`${
        currentTab === element
          ? "bg-richblack-900 text-pure-greys-5 transform-3d"
          : "text-pure-greys-300 "
      } px-3 py-1 rounded-full text-[16px] font-medium cursor-pointer duration-100 hover:scale-95 active:bg-black`}
      onClick={() => {
        setMyData(element);
      }}
    >
      <div className={`${style}`}>{element}</div>
    </div>
  );
};

export default SliderTab;
