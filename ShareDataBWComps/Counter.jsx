function Counter(props) {
    return (
    <button onClick={props.onClick}>Counter is {props.count}</button>
  );
}

export default Counter; 