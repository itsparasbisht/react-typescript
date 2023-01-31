type ContainerProps = {
  styles: React.CSSProperties;
};

function Container(props: ContainerProps) {
  return <div style={props.styles}>hello</div>;
}

export default Container;
