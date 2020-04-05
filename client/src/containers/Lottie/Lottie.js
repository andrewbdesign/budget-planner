import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const Lottie = props => {

  const element = useRef(null)

  const { 
    animationData,
    className,
    loop
  } = props

  
  useEffect(() => {

    const observer = new IntersectionObserver(entry => {
      const first = entry[0]
      // first.isIntersecting ? lottie.play() : lottie.pause()
      if (first.isIntersecting) {
        lottie.play()
        observer.disconnect()
      }
    })

    observer.observe(element.current)

    lottie.loadAnimation({
      animationData,
      container: element.current,
      renderer: 'svg',
      autoplay: false,
      loop: loop === false ? loop : true
    })

  }, [animationData, loop])

  return <div ref={element} className={ className ? className : "lottie"} />
}

export default Lottie