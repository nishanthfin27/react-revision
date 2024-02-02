import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to vist the google'
}

function MyApp() {
    return(
        <div>
            <h1>Custom React APP</h1>
        </div>
    )
}

const AnotherElement = (
    <a href='http://google.com' target='_blank'>Visit Google</a>
)

const areactElement = React.createElement(
    'a',
    {href:'https://google.com', target:'_blank'},
    'Click here to visit google'
)
ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
