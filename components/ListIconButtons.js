import IconButton from 'components/IconButton';

export default function ListIconButtons({ icons }) {
  return icons.map((button) => (
    <IconButton
      key={button.id}
      icons={button}
      height='50'
      width='50'
      priority
    />
  ));
}
ListIconButtons.defaultProps = {
  priority: null
};
