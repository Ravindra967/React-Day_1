const parent = React.createElement("div", {id: "parent"},[
    React.createElement("div", {id: "child"},[
        React.createElement("h1", {}, "hello  world"),
        React.createElement("h2", {}, "Hello React"),
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "hello  world1"),
        React.createElement("h2", {}, "Hello React2"),
    ]),
]);
const root = ReactDOM.createRoot(
                document.getElementById('root')
            );

root.render(parent);