import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Recommendation = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(
    `/${mediaType}/${id}/recommendations`
  );

  return (
    <React.Fragment>
      {data?.results.length > 0 && (
        <Carousel
          title="Recommendation"
          data={data?.results}
          loading={loading}
          endpoint={mediaType}
        />
      )}
    </React.Fragment>
  );
};

export default Recommendation;
