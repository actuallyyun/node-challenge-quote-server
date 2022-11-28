'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Quotes = function (_React$Component) {
    _inherits(Quotes, _React$Component);

    function Quotes(props) {
        _classCallCheck(this, Quotes);

        var _this = _possibleConstructorReturn(this, (Quotes.__proto__ || Object.getPrototypeOf(Quotes)).call(this, props));

        _this.state = { quote: "Generating Random Quote..." };
        return _this;
    }

    _createClass(Quotes, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            fetch("http://localhost:5000/quotes/random").then(function (res) {
                return res.json();
            }).then(function (data) {
                _this2.setState({ quote: data.quote });
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    this.state.quote
                ),
                React.createElement(SearchForm, null)
            );
        }
    }]);

    return Quotes;
}(React.Component);

var SearchForm = function (_React$Component2) {
    _inherits(SearchForm, _React$Component2);

    function SearchForm(props) {
        _classCallCheck(this, SearchForm);

        var _this3 = _possibleConstructorReturn(this, (SearchForm.__proto__ || Object.getPrototypeOf(SearchForm)).call(this, props));

        _this3.handleSearchForm = function (event) {
            event.preventDefault();
            console.log(event.target);
            _this3.setState({ term: "keyword" });
        };

        _this3.state = { term: "" };
        return _this3;
    }

    _createClass(SearchForm, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.handleSearchForm();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                { action: "", onSubmit: handleSearchForm },
                React.createElement("input", { type: "text", value: this.state.term }),
                React.createElement(
                    "button",
                    null,
                    " Search"
                )
            );
        }
    }]);

    return SearchForm;
}(React.Component);

var domElement = document.getElementById("app");
var root = ReactDOM.createRoot(domElement);

root.render(React.createElement(Quotes, null));