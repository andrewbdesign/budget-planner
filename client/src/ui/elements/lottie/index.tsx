import React, { FC, useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import { Wrapper } from './styled';

type LottieProps = {
  animationData: any;
  name: string;
  loop?: boolean;
  className?: string;
};

const Lottie: FC<LottieProps> = ({
  animationData,
  loop = true,
  name,
  className,
}) => {
  // TODO: Fix any type
  const element = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entry => {
      const first = entry[0];
      first.isIntersecting ? lottie.play(name) : lottie.pause(name);
    });

    observer.observe(element.current);

    lottie.loadAnimation({
      animationData,
      loop,
      name,
      container: element.current,
      renderer: 'svg',
      autoplay: true,
    });

    return () => {
      observer.disconnect();
      lottie.destroy();
    };
  }, [animationData, loop, name]);
  return (
    <Wrapper
      ref={element}
      className={['lottie', className, name].filter(Boolean).join(' ')}
      data-name={name}
    />
  );
};

export default Lottie;
