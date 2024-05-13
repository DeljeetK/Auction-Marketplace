import React, { useState, StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import Carousel from "react-simply-carousel";
import cars from "../../../images/cars.png";
import gym from "../../../images/gym.png";
import antique from "../../../images/antique.png";
import art from "../../../images/Art.png";
import ReactSimplyCarousel from "react-simply-carousel";

import {
  IconButton,
  ImageListItemBar,
  ImageList,
  ImageListItem,
} from "@mui/material";
import itemData from "./itemdata";
// import { makeStyles } from '@material-ui/core/styles';
// import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     slidesToSlide: 3, // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 2, // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
// };
// <Carousel
//   swipeable={false}
//   draggable={false}
//   showDots={true}
//   responsive={responsive}
//   ssr={true} // means to render carousel on server-side.
//   infinite={true}
//   //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
//   autoPlaySpeed={1000}
//   keyBoardControl={true}
//   customTransition="all .5"
//   transitionDuration={500}
//   containerClass="carousel-container"
//   removeArrowOnDeviceType={["tablet", "mobile"]}
//   //   deviceType={this.props.deviceType}
//   dotListClass="custom-dot-list-style"
//   itemClass="carousel-item-padding-40-px"
// >
//   <div>
//     <img svg={cars} />
//   </div>
//   <div>{gym}</div>
//   <div>{antique}</div>
//   <div>{art}</div>
// </Carousel>;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//     overflow: "hidden",
//     backgroundColor: theme.palette.background.paper,
//   },
//   imageList: {
//     flexWrap: "nowrap",
//     // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
//     transform: "translateZ(0)",
//   },
//   title: {
//     color: theme.palette.primary.light,
//   },
//   titleBar: {
//     background:
//       "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
//   },
// }));

const TopCategory = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  // const classes = useStyles();
  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
            justifyContent: "space-around",
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 4,
            itemsToScroll: 2,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}

        <div
          style={{ width: 300, height: 300, justifyContent: "space-around" }}
        >
          <img src={cars}></img>
          slide 0
        </div>
        <div style={{ width: 300, height: 300, marginLeft: "30px" }}>
          <img src={art}></img>
          slide 1
        </div>
        <div style={{ width: 300, height: 300, marginLeft: "5px" }}>
          <img src={antique}></img>
          slide 2
        </div>
        <div style={{ width: 300, height: 300, marginLeft: "20px" }}>
          <img src={gym}></img>
          slide 3
        </div>
        {/* <div style={{ width: 300, height: 300, background: '#ffc0cb' }}>
          slide 4
        </div>
        <div style={{ width: 300, height: 300, background: '#ffffff' }}>
          slide 5
        </div>
        <div style={{ width: 300, height: 300, background: '#ffe4e1' }}>
          slide 6
        </div>
        <div style={{ width: 300, height: 300, background: '#008080' }}>
          slide 7
        </div>
        <div style={{ width: 300, height: 300, background: '#ff0000' }}>
          slide 8
        </div>
        <div style={{ width: 300, height: 300, background: '#e6e6fa' }}>
          slide 9
        </div> */}
      </ReactSimplyCarousel>
    </div>
    //---------------------------------------------------------------------------------------
    // <div>
    //   <Carousel
    //     containerProps={{
    //       style: {
    //         width: "100%",
    //         justifyContent: "space-around",
    //         userSelect: "none",
    //       }
    //     }}
    //     preventScrollOnSwipe
    //     swipeTreshold={20}
    //     activeSlideIndex={activeSlide}
    //     activeSlideProps={{
    //       style: {
    //         background: "white"
    //       }
    //     }}
    //     onRequestChange={setActiveSlide}
    //     forwardBtnProps={{
    //       children: ">",
    //       style: {
    //         width: 60,
    //         height: 60,
    //         minWidth: 60,
    //         alignSelf: "center"
    //       }
    //     }}
    //     backwardBtnProps={{
    //       children: "<",
    //       style: {
    //         width: 60,
    //         height: 60,
    //         minWidth: 60,
    //         alignSelf: "center"
    //       }
    //     }}
    //     dotsNav={{
    //       show: true,
    //       itemBtnProps: {
    //         style: {
    //           height: 16,
    //           width: 16,
    //           borderRadius: "50%",
    //           border: 0,
    //           background:"grey"
    //         }
    //       },
    //       activeItemBtnProps: {
    //         style: {
    //           height: 16,
    //           width: 16,
    //           borderRadius: "50%",
    //           border: 0,
    //           background: "black"
    //         }
    //       }
    //     }}
    //     itemsToShow={4}
    //     speed={400}
    //     centerMode
    //   >
    //     {itemData.map((item) => (
    //       < div key={item.img}>
    //         <img src={item.img} alt={item.title} />
    //         <ImageListItemBar
    //           title={item.title}
    //         //   classes={{
    //         //     root: classes.titleBar,
    //         //     title: classes.title,
    //         //   }}
    //         //   actionIcon={
    //         //     <IconButton aria-label={`star ${item.title}`}>
    //         //     </IconButton>
    //         //   }
    //         />
    //       </div>
    //     ))}
    //   </Carousel>
    // </div>

    // -----------------------------------------------------------------------------------------------
    // <div className={classes.root}>
    //   <ImageList className={classes.imageList} cols={2.5}>
    //     {itemData.map((item) => (
    //       <ImageListItem key={item.img}>
    //         <img src={item.img} alt={item.title} />
    //         <ImageListItemBar
    //           title={item.title}
    //           classes={{
    //             root: classes.titleBar,
    //             title: classes.title,
    //           }}
    //           actionIcon={
    //             <IconButton aria-label={`star ${item.title}`}></IconButton>
    //           }
    //         />
    //       </ImageListItem>
    //     ))}
    //   </ImageList>
    // </div>
  );
};

export default TopCategory;
