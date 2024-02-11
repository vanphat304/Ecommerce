import { useEffect, useMemo, useState } from "react";

 export function useIsInViewport(ref :  React.RefObject<Element> ) {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting),{
          // rootMargin:'100px'
          // threshold:10
        }
      ),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current as Element);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}