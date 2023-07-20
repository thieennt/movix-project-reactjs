import { useRef } from "react";

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import Img from "../lazyLoadImage/Img";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import PosterFallback from "../../assets/no-poster.png";

import "./styles.scss";

const Carousel = ({ data, loading }) => {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  console.log("data1", data);

  console.log("carouselContainer", carouselContainer);

  const navigation = (dir) => {};

  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock">
          <div className="textBlock">
            <span className="title"></span>
            <span className="date"></span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="carousel">
      <ContentWrapper>
        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className="carouselRightNav arrow"
          onClick={() => navigation("right")}
        />
        {!loading ? (
          <div className="carouselItems">
            {data?.map((item) => {
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback;
              return (
                <div className="carouselItem" key={item.id}>
                  <div className="posterBlock">
                    <Img src={posterUrl} alt="" />
                  </div>
                  <div className="textBlock">
                    <span className="title">
                      {item.title || item.original_title}
                    </span>
                    <span className="date">
                      {dayjs(item.release_date).format("MMM D, YYYY")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <span>{skItem()}</span>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
