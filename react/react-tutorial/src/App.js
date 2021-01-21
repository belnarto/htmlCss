import React, {Component} from "react";
import Catalog from "./Catalog";
import PaymentForm from "./PaymentForm";
import Basket from "./Basket";
import Game from "./Game";

// class App extends Component {
//     render() {
//         const constHeading = React.createElement('h1', {className: 'site-heading'}, 'Hello, React2!');
//         return React.createElement('div', {className: 'App'}, constHeading)
//     }
// }

// class App extends Component {
//     render() {
//         return (
//             <div className="App">
//                 <h1>Hello, React!</h1>
//             </div>
//         )
//     }
// }

class App extends Component {
    state = {
        basketMap: new Map(),
        name: String(),
        address: String(),
        data: []
    }

    render() {
        const catalogMap = new Map();
        const {data} = this.state;

        const result = data.map((entry, index) => {
            return <li key={index}>{entry}</li>
        })

        catalogMap.set('Milk', 1.2);
        catalogMap.set('Bread', 1.4);
        catalogMap.set('Meat', 3.2);
        catalogMap.set('Eggs', 2.2);
        return (
            <div className="container">
                <h1>Catalog</h1>
                <Catalog catalogMap={catalogMap}
                         addToBasket={this.addToBasket}
                         removeFromBasket={this.removeFromBasket}/>
                <h1>Basket</h1>
                <Basket catalogMap={catalogMap}
                        basketMap={this.state.basketMap}/>
                <h1>Payment Section</h1>
                <PaymentForm basketMap={this.state.basketMap}
                             pay={this.pay}/>
                <ul>{result}</ul>
                <Game />
            </div>
        )
    }

    addToBasket = (productName) => {
        if (this.state === undefined || this.state.basketMap === undefined || productName === undefined) {
            return;
        }
        if (this.state.basketMap.has(productName)) {
            this.state.basketMap.set(productName, this.state.basketMap.get(productName) + 1);
        } else {
            this.state.basketMap.set(productName, 1);
        }
        this.setState(this.state);
    }

    removeFromBasket = (productName) => {
        if (this.state === undefined || this.state.basketMap === undefined || productName === undefined) {
            return;
        }
        if (this.state.basketMap.has(productName)) {
            if (this.state.basketMap.get(productName) > 1) {
                this.state.basketMap.set(productName, this.state.basketMap.get(productName) - 1);
            } else {
                this.state.basketMap.delete(productName)

            }
        }
        this.setState(this.state);
    }

    pay = () => {
        if (this.state.basketMap === undefined) {
            alert("Something went wrong");
            this.setState(this.state);
            return;
        }
        if (this.state.basketMap.size === 0) {
            alert("Basket is empty, please put something into basket before paying.");
            this.setState(this.state);
            return;
        }
        // if (!this.state.name || this.state.name.trim === "") {
        //     alert("Please fill your name.");
        //     this.setState(this.state);
        //     return;
        // }
        // if (!this.state.address || this.state.address.trim === "") {
        //     alert("Please fill your address.");
        //     this.setState(this.state);
        //     return;
        // }
        alert("Successfully paid, thank you!");
        this.state.basketMap.clear();
        this.setState(this.state);
    }

    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
        const url =
            'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

        fetch(url)
            .then((result) => result.json())
            .then((result) => {
                // this.state.data = result;
                this.setState({
                    basketMap: this.state.basketMap,
                    name: this.state.name,
                    address: this.state.address,
                    data: result,
                })
            })
    }
}

export default App