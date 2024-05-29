import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

const Portal = ({ children }: PortalProps) => {
  const [container, setContainer] = useState<HTMLDivElement>();

  useEffect(() => {
    const newContainer = document.createElement('div');
    document.body.appendChild(newContainer);
    setContainer(newContainer);

    return () => {
      if (newContainer) {
        document.body.removeChild(newContainer);
      }
    };
  }, []);

  if (!container) return null;
  return createPortal(children, container);
};

export default Portal;
