// import Quotes from "./components/Quotes"
'use strict'

const e = React.createElement

class Quotes extends React.Component {
    constructor(props) {
        super(props)
        this.state = { quotes: "a quote" }
    }
    render() {
        return (
            this.state.quotes
        )
    }
}


const app = document.querySelector('.app')
console.log(app)
const root = ReactDOM.createRoot(app)
root.render(
    e(Quotes)
)