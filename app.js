// const heading = React.createElement('h1', 
// {
//     id: 'heading',
//     aaa: 'xyz'
// }, 
// 'Sample Text for React Heading...');

{/* <div class="parent">
    <div class="child">
        <h1>Main Heading H1</h1>
        <h2>Child Heading H2</h2>
    </div>
</div> */}

// const text = document.createElement('h1');

// document.getElementById('toplace').innerHTML = 'hello text..........'

const parent = React.createElement(
    'div',
    {id: 'parent'},
    [
        React.createElement(
            'div',
            {id: 'child'},
            [
                React.createElement('h1', {class: 'h1'}, ' Heading H1'),
                React.createElement('h2', {class: 'h2'}, ' Heading H2')
            ]
        ),
        React.createElement(
            'div',
            {id: 'child'},
            [
                React.createElement('h3', {class: 'h1'}, ' Heading H3'),
                React.createElement('h4', {class: 'h2'}, ' Heading H4')
            ]
        )
    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);