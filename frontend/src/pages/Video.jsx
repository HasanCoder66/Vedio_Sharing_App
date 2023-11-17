import React from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
// import { ThumbUpOffAltOutlined } from "@mui/icons-material";
import Comments from "../components/Comments";
import Card from '../components/Card'

const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
`;
const Recommendation = styled.div`
  flex: 2;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

function Video() {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="520"
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title> Rest Videos</Title>
        <Details>
          <Info>124125 views 16-November-2023</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon />
              123
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon />
              Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon />
              Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon />
              Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://scontent.fkhi4-3.fna.fbcdn.net/v/t39.30808-6/344859260_9764027536941505_5188833060278820647_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH7vxBxRC8BIXXDfKxmKp_QIQqlHeM23VkhCqUd4zbdWUQP10T73idj9leNJ4HhuNE3NEJ2L2biQphwS3SpwqfO&_nc_ohc=3TM3CYEXFkkAX-funxn&_nc_oc=AQnOQI5daeQ2P505wzkCi-c2KshZsL6ZngBHzWyMz9h6XsgFOc-7lM0hCL1htJZyJ6k&_nc_zt=23&_nc_ht=scontent.fkhi4-3.fna&oh=00_AfCrK8pdmWGoUXgVZ9svwCRl8r_koUJOgFx21oIKR97d9w&oe=655AC81F" />
            <ChannelDetail>
              <ChannelName>TechTube</ChannelName>
              <ChannelCounter>3.34m Subscribers</ChannelCounter>
              <Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam iusto recusandae, et voluptas unde amet excepturi,
                possimus corporis sunt commodi, incidunt culpa eius.
                Repudiandae, iste.
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr/>
        <Comments/>
      </Content>
      <Recommendation>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
      </Recommendation>
    </Container>
  );
}

export default Video;
