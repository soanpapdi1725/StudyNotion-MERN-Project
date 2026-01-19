import { useEffect } from "react";

export const useOnClickOutside = (ref, handlerFunction) => {
  // define kar diya ek useEffect Hook jo monitor krega ref(jo bhi button me lagega) uske changes ko
  useEffect(() => {
    // listener Function call hoga jab jab mouseDown or touchStart jesi chize hogi
    const listenerFunction = (event) => {
      //1. agar ref.current exist nahi krta hoga toh kucn ni hoga
      //2. or agar ref.current me contain krta hoga
      // event me targetted area toh bhi kuch ni hoga
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      //or ye jo function user ne diya hai call ho jayega
      handlerFunction(event);
    };

    // Add eventlistener for mouseDown and touchStart events on the Document
    document.addEventListener("mousedown", listenerFunction);
    document.addEventListener("touchstart", listenerFunction);
    document.addEventListener("scroll", listenerFunction);

    // saaf safai kr do warna wo listener function hamesha
    // active rahege or memory leak krenge jis se website slow hogi
    return () => {
      document.removeEventListener("mousedown", listenerFunction);
            document.removeEventListener("mouseup", listenerFunction);

      document.removeEventListener("touchstart", listenerFunction);
      document.removeEventListener("scroll", listenerFunction);
    };
  }, [ref, handlerFunction]);
};

export default useOnClickOutside;
