const SliderTab = ({
  element,
  currentTab,
  valuesToBackend = false,
  setMyData,
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
      {element}
      {valuesToBackend ? (
        <input type="hidden" name="accountType" value={element} />
      ) : (
        ""
      )}
    </div>
  );
};

export default SliderTab;
