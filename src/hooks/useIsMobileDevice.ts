import { useWindowSize } from 'hooks';
import { useEffect, useState } from 'react';

const useIsMobileDevice = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const currentWidth = useWindowSize();

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      )
    ) {
      setIsMobileDevice(true);
    }
  }, []);

  const isSmallMobileDevice: boolean = currentWidth
    ? currentWidth < 768 && isMobileDevice
    : false;

  return { isMobileDevice, isSmallMobileDevice };
};

export default useIsMobileDevice;
