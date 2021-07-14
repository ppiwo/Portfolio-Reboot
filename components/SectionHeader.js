export default function SectionHeader(props) {
  // If mainHeader is true, it's a hero section, use H1
  if (props.mainHeader && props.mainHeader == true) {
    return (
      <div>
        <h1>{props.header}</h1>
        <p>{props.subheader}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h2>{props.header}</h2>
        <p>{props.subheader}</p>
      </div>
    );
  }
}
