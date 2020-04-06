import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const Lottie = props => {

  const element = useRef(null)

  const { 
    animationData,
    className,
    name,
    loop
  } = props

  
  useEffect(() => {

    const observer = new IntersectionObserver(entry => {
      const first = entry[0]
      if (first.isIntersecting) {
        lottie.play(name)
      } else {
        lottie.pause(name)
      }
    })

    observer.observe(element.current)

    lottie.loadAnimation({
      animationData,
      container: element.current,
      renderer: 'svg',
      autoplay: false,
      loop: loop === false ? loop : true,
      name: name ? name : ''
    })

  }, [animationData, loop, name])

  return (
    <div
      ref={element}
      className={[
        'lottie',
        className ? className : '',
        name ? name : ''
      ].join(' ')}
      data-name={ name ? name : '' }/>)
}

export default Lottie