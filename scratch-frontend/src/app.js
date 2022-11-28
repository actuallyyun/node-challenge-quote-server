'use strict'

class Quotes extends React.Component {
    constructor(props) {
        super(props)
        this.state = { quote: "Generating Random Quote..." }
    }

    componentDidMount() {
        fetch("http://localhost:5000/quotes/random")
            .then(res => res.json())
            .then(data => {
                this.setState({ quote: data.quote })
            })
    }

    render() {
        return (
            <div>
                <p>
                    {this.state.quote}
                </p>
                <SearchForm />
            </div>
        )
    }
}

class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { term: "" }
    }

    componentDidMount() {
        this.handleSearchForm()

    }
    handleSearchForm = (event) => {
        event.preventDefault()
        console.log(event.target)
        this.setState({ term: "keyword" })

    }


    render() {
        return (
            <form action="" onSubmit={handleSearchForm}>
                <input type="text" value={this.state.term} />
                <button> Search</button>
            </form>
        )
    }
}




const domElement = document.getElementById("app")
const root = ReactDOM.createRoot(domElement)

root.render(<Quotes />)