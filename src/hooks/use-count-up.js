import { useEffect, useRef, useState } from "react";
function useCountUp(target, durationMs = 1800, start = false) {
  const [value, setValue] = useState(0);
  const raf = useRef(null);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const animate = (t) => {
      if (startTime === null) startTime = t;
      const progress = Math.min((t - startTime) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [target, durationMs, start]);
  return value;
}
export {
  useCountUp
};
