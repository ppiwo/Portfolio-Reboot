import IconButton from 'components/IconButton';

export default function ListIconButtons(props) {
  return props.icons.map((button) => (
    <IconButton
      key={button.id}
      icons={button}
      height='50'
      width='50'
      label={props.label}
      priority={props.priority}
    />
  ));
}
