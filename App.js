// const heading= React.createElement("h1",{id:"heading"},"Hello World from React!!!");
// console.log(heading); //returns an object
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const heading= React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child"},
      [  React.createElement("h1",{},"I m h1 tag"),
      React.createElement("h2",{},"I m h2 tag")
    ]), React.createElement(
        "div",
        {id:"child"},
      [  React.createElement("h1",{},"I m h1 tag"),
      React.createElement("h2",{},"I m h2 tag")
    ]),]
    
);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);