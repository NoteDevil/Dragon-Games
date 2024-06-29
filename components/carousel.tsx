"use client";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import { PropsWithChildren, useEffect, useState } from "react";

import { CarouselNext, CarouselPrev } from "./icons";
import { Button } from "@nextui-org/button";
import Dots from "./Dots";

// Define the props
type Props = PropsWithChildren ;

const Carousel = ({ children, ...options }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  // need to selectedIndex to allow this component to re-render in react.
  // Since emblaRef is a ref, it won't re-render even if there are internal changes to its state.
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    function selectHandler() {
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on("select", selectHandler);
    // cleanup
    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);

  const length = React.Children.count(children);
  const canScrollNext = !!emblaApi?.canScrollNext();
  const canScrollPrev = !!emblaApi?.canScrollPrev();
  return (
    <div className="flex items-center justify-between">
      <div className="h-20 w-20 flex rounded-full backdrop-blur-lg">
        <Button
          onClick={() => {
            if (canScrollPrev) {
              !!emblaApi?.scrollPrev();
            }
          }}
          // disabled={!props.canScrollPrev}
          className="rounded-full bg-transparent h-full w-full"
        >
          <div className=" h-20 w-20 flex items-center">
            <CarouselPrev />
          </div>
        </Button>
      </div>
      <div className="overflow-hidden w-full " ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>
      <Dots itemsLength={length} selectedIndex={selectedIndex} />
      <div className="h-20 w-20 flex rounded-full backdrop-blur-lg">
        <Button
          onClick={() => {
            if (canScrollNext) {
              !!emblaApi?.scrollNext();
            }
          }}
          // disabled={!props.canScrollPrev}
          className="rounded-full bg-transparent h-full w-full"
        >
          <div className=" h-20 w-20 flex items-center">
            <CarouselNext />
          </div>
        </Button>
      </div>
    </div>
  );
};
export default Carousel;
