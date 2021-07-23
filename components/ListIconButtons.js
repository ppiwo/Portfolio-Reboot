import IconButton from 'components/IconButton';
import styled from 'styled-components';

const alignmentOptions = (align) => {
    switch (align) {
        case 'left':
            return 'flex-start';
        case 'center':
            return 'center';
        case 'right':
            return 'flex-end';
        default:
            return 'flex-start';
    }
};

const IconWrapper = styled.div`
    display: flex;
    justify-content: ${({ align }) => alignmentOptions(align)};
`;

export default function ListIconButtons({ icons, align }) {
    return (
        <IconWrapper align={align}>
            {icons.map((button) => (
                <IconButton key={button.id} icons={button} layout="fill" priority />
            ))}
        </IconWrapper>
    );
}
ListIconButtons.defaultProps = {
    priority: null,
};
