import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text}
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

function Comment() {
  return (
    <Container>
        <Avatar src='https://scontent.fkhi4-3.fna.fbcdn.net/v/t39.30808-6/344859260_9764027536941505_5188833060278820647_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH7vxBxRC8BIXXDfKxmKp_QIQqlHeM23VkhCqUd4zbdWUQP10T73idj9leNJ4HhuNE3NEJ2L2biQphwS3SpwqfO&_nc_ohc=3TM3CYEXFkkAX-funxn&_nc_oc=AQnOQI5daeQ2P505wzkCi-c2KshZsL6ZngBHzWyMz9h6XsgFOc-7lM0hCL1htJZyJ6k&_nc_zt=23&_nc_ht=scontent.fkhi4-3.fna&oh=00_AfCrK8pdmWGoUXgVZ9svwCRl8r_koUJOgFx21oIKR97d9w&oe=655AC81F' />
        <Details>
            <Name>M.Hasan <Date>2 Day</Date> </Name>
            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim sit consequatur incidunt odio esse ex unde, temporibus voluptas. Laudantium expedita repudiandae delectus at ratione nisi temporibus!</Text>
        </Details>
    </Container>
  )
}

export default Comment