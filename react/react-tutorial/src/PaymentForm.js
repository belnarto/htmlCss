import React, {Component} from 'react'

class PaymentForm extends Component {
    initialState = {
        name: '',
        address: '',
    }

    state = this.initialState

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({
            [name]: value,
        })
    }

    render() {
        const {name, address} = this.state;
        const basketMap = this.props.basketMap;
        const {pay} = this.props

        return (
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    required
                    onChange={this.handleChange}/>
                <label htmlFor="job">Address</label>
                <input
                    type="text"
                    name="address"
                    id="address"
                    value={address}
                    required
                    onChange={this.handleChange}/>
                <button className={"btn"} onSubmit={() => {
                    pay(basketMap)
                }}>Pay
                </button>
            </form>
        );
    }
}

export default PaymentForm;
