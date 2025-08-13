const HighlightText = ({ text }) => {
  return (
    <span
      className="font-bold bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6ffcb] bg-clip-text text-transparent rounded-md"
    >
      {text}
    </span>
  );
};

export default HighlightText;
