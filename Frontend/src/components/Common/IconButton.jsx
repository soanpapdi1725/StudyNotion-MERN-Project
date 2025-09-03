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
      className={`${customClasses}`}
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
