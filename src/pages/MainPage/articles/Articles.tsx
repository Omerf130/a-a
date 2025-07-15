import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slide from "./Slide";
import "./Articles.scss"

const slidesData = [
  {
    description: "React Carousel with Server Side Rendering Support – Part 2",
    headline: "w3js.com - web front-end studio",
    image:
      "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    description: "Fixing CSS load order/style.chunk.css incorrect in Nextjs",
    headline: "w3js.com - web front-end studio",
    image:
      "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    description: "React Carousel with Server Side Rendering Support – Part 2",
    headline: "w3js.com - web front-end studio",
    image:
      "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    description: "React Carousel with Server Side Rendering Support – Part 2",
    headline: "w3js.com - web front-end studio",
    image:
      "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    description: "Fixing CSS load order/style.chunk.css incorrect in Nextjs",
    headline: "w3js.com - web front-end studio",
    image:
      "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    description: "React Carousel with Server Side Rendering Support – Part 2",
    headline: "w3js.com - web front-end studio",
    image:
      "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
];

const Articles = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect
      infinite={true}
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          partialVisibilityGutter: 0,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          partialVisibilityGutter: 0,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          partialVisibilityGutter: 0,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl
      shouldResetAutoplay
      showDots
      sliderClass="slider"
      slidesToSlide={1}
      swipeable
    >
      {slidesData.map((slide, index) => (
        <Slide
          key={index}
          id={index + 1}
          description={slide.description}
          headline={slide.headline}
          image={slide.image}
        />
      ))}
    </Carousel>
  );
};

export default Articles;
