import React, {Component} from "react";

const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Name</th>
            <th>Count</th>
            <th>Price</th>
        </tr>
        </thead>
    )
}
let totalProductsCount = 0;
let totalCost = 0;
const TableFooter = () => {
    return (
        <thead>
        <tr>
            <th>Total:</th>
            <th>{totalProductsCount}</th>
            <th>{totalCost.toLocaleString(document.documentElement.lang, {maximumFractionDigits: 2})}</th>
        </tr>
        </thead>
    )
}
const TableBody = (props) => {
    let index = 0;
    totalProductsCount = 0;
    totalCost = 0;
    const rows = []
    for (const [key, value] of props.basketMap.entries()) {
        totalProductsCount += value;
        const cost = props.catalogMap.get(key) * value;
        totalCost += cost;
        rows.push(<tr key={index}>
            <td>{key}</td>
            <td>{value}</td>
            <td>{cost.toLocaleString(document.documentElement.lang, {maximumFractionDigits: 2})}</td>
        </tr>)
        index++
    }
    // props.basketMap.forEach((entry) => {
    //         rows.push(<tr key={index}>
    //             <td>{entry.key}</td>
    //             <td>{entry.value}</td>
    //             <td>{entry.value * props.catalog.get}</td>
    //         </tr>)
    //         index++
    //     }
    // )
    return <tbody>{rows}</tbody>
}

class Basket extends Component {
    render() {
        const {catalogMap} = this.props
        const {basketMap} = this.props

        return (
            <table>
                <TableHeader/>
                <TableBody catalogMap={catalogMap} basketMap={basketMap}/>
                <TableFooter/>
            </table>
        )
    }
}

export default Basket