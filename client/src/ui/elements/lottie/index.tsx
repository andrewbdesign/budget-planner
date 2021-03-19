import React, { FC, useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import { Wrapper } from './styled';

type Props = {
  // TODO: Fix animationData any type
  animationData: any;
  name: string;
  loop?: boolean;
  className?: string;
  maxWidth?: number;
  maxHeight?: number;
};

const Lottie: FC<Props> = ({
  animationData,
  name,
  loop = true,
  className,
  maxWidth,
  maxHeight,
}) => {
  const element = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entry => {
      const lottieElement = entry[0];
      lottieElement.isIntersecting ? lottie.play(name) : lottie.pause(name);
    });

    if (element.current) {
      observer.observe(element.current);
      lottie.loadAnimation({
        animationData,
        loop,
        name,
        container: element.current,
        renderer: 'svg',
        autoplay: true,
      });
    }

    return () => {
      observer.disconnect();
      lottie.destroy();
    };
  }, [animationData, loop, name]);
  return (
    <Wrapper
      style={{ maxWidth: maxWidth + 'px', maxHeight: maxHeight + 'px' }}
      ref={element}
      className={['lottie', className, name].filter(Boolean).join(' ')}
      data-name={name}
    />
  );
};

export default Lottie;
