ReactDOM.render(
    <div>
        <h1>Hi</h1>
        <h2> Hello </h2>
    </div>,
    document.getElementById('app'))

ReactDOM.render(React.createElement('input', {
    placeholder: 'Help text',
    onClick: () => console.log("Clicked"),
    onMouseEnter: () => console.log("Mouse over"),
}), docunemt.getElementById('app1'))