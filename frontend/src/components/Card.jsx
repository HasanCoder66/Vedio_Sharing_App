import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
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

function Card({type}) {
  return (
    <Link to='/video/test' style={{textDecoration:'none'}}>
    <Container type={type}>
      <Image type={type} src='https://scontent.fkhi4-2.fna.fbcdn.net/v/t39.30808-1/396199148_856108126102706_5721945219804232938_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEMifrV-LFicFT1fdC2HANQ6nzycmJMQg7qfPJyYkxCDr1Ti3FTt9Cu1taJc7SnqHUgK4Byk54-yloFNGNgnEjE&_nc_ohc=MGkksE53dvUAX-oVao8&_nc_ht=scontent.fkhi4-2.fna&oh=00_AfAtgRkfDGxdmR1pbnOulyvRwNvd_FV75gacFcthVy7Zgw&oe=655B071B' alt="TechTube"/>
      
      <Details type={type}>
    <ChannelImage type={type}
    src='https://scontent.fkhi4-3.fna.fbcdn.net/v/t39.30808-6/344859260_9764027536941505_5188833060278820647_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH7vxBxRC8BIXXDfKxmKp_QIQqlHeM23VkhCqUd4zbdWUQP10T73idj9leNJ4HhuNE3NEJ2L2biQphwS3SpwqfO&_nc_ohc=3TM3CYEXFkkAX-funxn&_nc_oc=AQnOQI5daeQ2P505wzkCi-c2KshZsL6ZngBHzWyMz9h6XsgFOc-7lM0hCL1htJZyJ6k&_nc_zt=23&_nc_ht=scontent.fkhi4-3.fna&oh=00_AfCrK8pdmWGoUXgVZ9svwCRl8r_koUJOgFx21oIKR97d9w&oe=655AC81F' alt="TechTube"/>
    <Texts>
      <Title>
        Latest video
      </Title>
      <ChannelName>
        TechCode
      </ChannelName>
      <Info>1,0913,8000 views </Info>
    </Texts>
      </Details>
    </Container>
    </Link>
  )
}

export default Card