const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Sevro",
      animal: "Dog",
      breed: "Pitbull",
    }),
    React.createElement(Pet, {
      name: "Tinker",
      animal: "Cat",
      breed: "Siamese",
    }),
    React.createElement(Pet, {
      name: "Coco",
      animal: "Bird",
      breed: "Parrot",
    }),
  ]);
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
