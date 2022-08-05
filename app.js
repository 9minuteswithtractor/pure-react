const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.occupation),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { className: "title" }, "React is rendered!"),
    React.createElement(
      Person,
      { name: "Peter", occupation: "Student - React.js" },
      null
    ),
    React.createElement(
      Person,
      { name: "Emily", occupation: "Pastry Chef" },
      null
    ),
    React.createElement(
      Person,
      { name: "Chris", occupation: "web-developer" },
      null
    ),
  ]);
};

// ReactDOM.render(React.createElement(App), document.getElementById("root"));
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(React.createElement(App));
