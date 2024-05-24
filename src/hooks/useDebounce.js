import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {

        const handler = setTimeout(() => {
            setDebouncedValue(value);    
        }, delay);
    
    // 변경이 되면 타임 리셋해줌.
      return () => {
        clearTimeout(handler);
      }
    //   useeffect가 다시 실행되려면 value나 delay값이 변경되면 됨. 
    }, [value, delay])
    return debouncedValue;
}