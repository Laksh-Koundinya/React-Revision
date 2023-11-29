const heading = React.createElement("div", { id: "mainparent" }, [
    React.createElement('div',{id:"p1"},[
        React.createElement('h1',{},'P1- H1 Tag'),
        React.createElement('h2',{},'P1- H2 Tag')
    ]),
    React.createElement('div',{id : "p2"},[
        React.createElement('h1',{},'P2- H1 Tag'),
        React.createElement('h2',{},'P2- H2 Tag')

    ]),
]);



const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(heading);
