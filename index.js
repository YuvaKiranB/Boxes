const Box = (props) => {
  //  Write your code here.
  const { size } = props;
  const class1 = size.toLowerCase() + " " + "box";
  return <div className={class1}>{size}</div>;
};

const element = (
  //  Write your code here.
  <div className="main">
    <h1 className="h1">Boxes</h1>
    <div className="boxesContainer">
      <Box size="Small" />
      <Box size="Medium" />
      <Box size="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
