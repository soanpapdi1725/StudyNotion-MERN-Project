const IconButton = ({
  text,
  children,
  type,
  disabled,
  OnClickButton,
  customClasses = null,
}) => {
  return (
    <button
      onClick={OnClickButton}
      disabled={disabled}
      className={`${customClasses} cursor-pointer rounded-md border-[1px] border-richblack-600 px-2.5 py-1`}
      type={type}
    >
      {children ? (
        <>
          <span>{text}</span>
          {children}
        </>
      ) : (
        text
      )}
    </button>
  );
};

export default IconButton;
