import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get("video/random");
      console.log(res)
      setVideos(res.data);
    };
    fetchVideos()
  }, []);
  return (
    <Container>
      {videos.map((vedio)=> (

        <Card />      
        ))}
        {/* <Card />      */}
    </Container>
  );
}

export default Home;
