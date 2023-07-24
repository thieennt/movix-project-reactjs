import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Similar = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);
  console.log("simi", data);

  const title = mediaType === "movie" ? "Similar Movies" : "Similar TV Shows";
  return (
    <React.Fragment>
      {data?.results.length > 0 && (
        <Carousel
          title={title}
          data={data?.results}
          loading={loading}
          endpoint={mediaType}
        />
      )}
    </React.Fragment>
  );
};

export default Similar;
