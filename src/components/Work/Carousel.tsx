import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { ChildrenProps } from '../../models/props';
import {
  ArrowIconLeft,
  ArrowIconRight,
  CarouselContainer,
  CarouselWrapper,
  Dots,
  DotsWrapper,
} from './styles';

const Carousel = ({ children }: ChildrenProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = React.Children.count(children);

  const handleNext = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(length - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const slideProps = {
    style: { transform: `translateX(${-100 * currentIndex}%)` },
  };

  return (
    <React.Fragment>
      <CarouselContainer {...handlers}>
        <ArrowIconLeft onClick={handlePrev} />
        <ArrowIconRight onClick={handleNext} />
        <CarouselWrapper {...slideProps}>{children}</CarouselWrapper>
      </CarouselContainer>
      <DotsWrapper>
        {React.Children.count(children) &&
          React.Children.map(children, (_, index: number) => (
            <Dots
              key={index}
              onClick={() => setCurrentIndex(index)}
              isActive={currentIndex === index}
            />
          ))}
      </DotsWrapper>
    </React.Fragment>
  );
};

export default Carousel;
