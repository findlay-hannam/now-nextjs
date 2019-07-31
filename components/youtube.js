import styled from 'styled-components';

const Container = styled.div`
margin: 10px;
`;

export default function Youtube() {
  return (
    <Container>
      <iframe
        width="790"
        height="500"
        src="https://www.youtube.com/embed/dBWFUVq85gs?list=PLnLl4qC2j01ZmgzIWs7ZNte_OM5qBm3Yu"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Container>
  );
}
