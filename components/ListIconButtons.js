import IconButton from 'components/IconButton';
import styled from 'styled-components';

const IconWrapper = styled.div`
  display: flex;
`;

export default function ListIconButtons({ icons }) {
  return (
    <IconWrapper>
      {icons.map((button) => (
        <IconButton key={button.id} icons={button} layout='fill' priority />
      ))}
    </IconWrapper>
  );
}
ListIconButtons.defaultProps = {
  priority: null
};
