import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { format } from 'timeago.js';
import axios from 'axios';
// import ProfileCard from '../img/Profile_FB.png'

const Container = styled.div`
  width :${(prop) => prop.type !== 'sm' && '360px'}
  margin-bottom: ${(prop) => prop.type === 'sm' ? '10px' : '45px'};
  cursor: pointer;
  display: ${(prop) => prop.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(prop) => (prop.type === 'sm' ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
  margin: 5px 0px;
  display :${(prop) => prop.type === 'sm' && 'flex'}
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(prop) => prop.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
  margin: 5px 0px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display:${(prop) => prop.type === 'sm' && 'none' }
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

function Card({type , video}) {
  // console.log(type)
  // console.log(video)
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`/users/find/${video.userId}`);
      setChannel(res.data);
    };
    fetchChannel();
  }, [video.userId]);
  return (
    <Link to='/video/test' style={{textDecoration:'none'}}>
    <Container type={type}>
      <Image type={type} src={video.imgUrl} alt="TechTube"/>
      
      <Details type={type}>
    <ChannelImage type={type}
    src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'
    // src={channel.img}
     alt="TechTube"/>
    <Texts>
      <Title>
        {video.title}
      </Title>
      <ChannelName>
        {channel.name}
      </ChannelName>
      <Info> {video.views} views {format(video.createdAt)} </Info>
    </Texts>
      </Details>
    </Container>
    </Link>
  )
}

export default Card