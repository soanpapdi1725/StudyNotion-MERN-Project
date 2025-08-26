import HighlighText from "../homepage/HighlightText";
const Quotes = () => {
  return (
    <div className="text-center text-4xl w-[80%] font-bold">
      We are passionate about revolutionizing the way we learn. Our innovative
      platform <HighlighText text={"combines technology"} />{" "}<span className="font-bold bg-gradient-to-b from-[#fa6c25] via-[#f57622] to-[#ffdbbaf1] bg-clip-text text-transparent rounded-md">expertise</span> , and
      community to create an{" "}<span className="font-bold bg-gradient-to-b from-[#fa6c25] via-[#f57622] to-[#ffdbbaf1] bg-clip-text text-transparent rounded-md">unparalleled educational experience.</span> 
    </div>
  );
};

export default Quotes;
