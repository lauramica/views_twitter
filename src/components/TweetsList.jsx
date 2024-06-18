import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Spinner } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";

import "../Home.css";
import Tweet from "./Tweet";

function TweetsList() {
  return (
    /* <InfiniteScroll
      className="overflow-visible"
      dataLength={movies.length}
      next={() => setPage(page + 1)}
      hasMore={true}
      loader={
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      }
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Eso es todo!</b>
        </p>
      }
    > */
    <Tweet />
    /* </InfiniteScroll> */
  );
}

export default TweetsList;
