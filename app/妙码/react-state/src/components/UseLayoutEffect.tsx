import { useEffect, useLayoutEffect, useRef } from "react";
const UseLayoutEffect = () => {
  const ref = useRef<HTMLDivElement>(null);

//   const [tooltipHeight, setTooltipHeight] = useState(0);

  useLayoutEffect(() => {
    if (ref.current) {
      const { height } = ref.current.getBoundingClientRect();
      console.log(height,1);
    //   setTooltipHeight(height);
    }
  }, []);

  useEffect(()=>{
    if (ref.current) {
        const { height } = ref.current.getBoundingClientRect();
        console.log(height,2);
        // setTooltipHeight(height);
      }
  },[])
  return <div ref={ref}>你好</div>;
};

export default UseLayoutEffect;
