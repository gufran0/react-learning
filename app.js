const parent = React.createElement('div', { id: "parent" },)

const heading = React.createElement(
    "h1",
    { id: "heading" },
    "hello world from react"
);

const root = ReactDOM.createRoot(document.getElementById("root"));  //object

root.render(heading);  
