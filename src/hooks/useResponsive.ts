import { useContext, useEffect, useState } from 'react';

import Breakpoint from '../context/breakpoint';

export default function useResponsive() {
  const breakpoint = useContext(Breakpoint.Context);
  const [isMobile, setIsMobile] = useState<boolean>();
  const [isTablet, setIsTablet] = useState<boolean>();
  const [isDesktop, setIsDesktop] = useState<boolean>();

  useEffect(() => {
    if (breakpoint) {
      setIsMobile(breakpoint.indexOf('mobile') > -1);
      setIsTablet(breakpoint.indexOf('tablet') > -1);
      setIsDesktop(breakpoint.indexOf('desktop') > -1);
    }
  }, [breakpoint]);

  return { isDesktop, isMobile, isTablet };
}
