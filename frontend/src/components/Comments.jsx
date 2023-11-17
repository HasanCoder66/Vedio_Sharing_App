import React from 'react'
import Comment from '../components/Comment'
import styled from 'styled-components'
const Container = styled.div`

`

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

function Comments() {
  return (
    <Container>
        <NewComment>
           <Avatar src='https://scontent.fkhi4-3.fna.fbcdn.net/v/t39.30808-6/344859260_9764027536941505_5188833060278820647_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH7vxBxRC8BIXXDfKxmKp_QIQqlHeM23VkhCqUd4zbdWUQP10T73idj9leNJ4HhuNE3NEJ2L2biQphwS3SpwqfO&_nc_ohc=3TM3CYEXFkkAX-funxn&_nc_oc=AQnOQI5daeQ2P505wzkCi-c2KshZsL6ZngBHzWyMz9h6XsgFOc-7lM0hCL1htJZyJ6k&_nc_zt=23&_nc_ht=scontent.fkhi4-3.fna&oh=00_AfCrK8pdmWGoUXgVZ9svwCRl8r_koUJOgFx21oIKR97d9w&oe=655AC81F' />
           <Input placeholder='Add a comments....'/>
        </NewComment>
           <Comment/>
           <Comment/>
           <Comment/>
           <Comment/>
           <Comment/>
    </Container>
  )
}

export default Comments