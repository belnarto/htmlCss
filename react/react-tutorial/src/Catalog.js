import React, {Component} from "react";

const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
        </thead>
    )
}
const TableBody = (props) => {
    let index = 0;
    const rows = []
    for (const [key, value] of props.catalogMap.entries()) {
        rows.push(<tr key={index}>
            <td>{key}</td>
            <td>{value}</td>
            <td>
                <button className={"btn"} onClick={() => props.addToBasket(key)}>Add</button>
                <button className={"btn"} onClick={() => props.removeFromBasket(key)}>Remove</button>
            </td>
        </tr>)
        index++
    }
    // const rows = props.characterDataReadOnly.map((row, index) => {
    //     return (
    //         <tr className={"readOnlyTableRow"} key={index}>
    //             <td>{row.name}</td>
    //             <td>{row.job}</td>
    //         </tr>
    //     )
    // })
    return <tbody>{rows}</tbody>
}

class Catalog extends Component {
    render() {
        const {catalogMap} = this.props
        const {addToBasket} = this.props
        const {removeFromBasket} = this.props

        return (
            <table>
                <TableHeader/>
                <TableBody catalogMap={catalogMap} addToBasket={addToBasket} removeFromBasket={removeFromBasket}/>
            </table>
        )
    }
}

// class Table extends Component {
//     render() {
//         return (
//             <table>
//                 <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Job</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 <tr>
//                     <td>Charlie</td>
//                     <td>Janitor</td>
//                 </tr>
//                 <tr>
//                     <td>Mac</td>
//                     <td>Bouncer</td>
//                 </tr>
//                 <tr>
//                     <td>Dee</td>
//                     <td>Aspiring actress</td>
//                 </tr>
//                 <tr>
//                     <td>Dennis</td>
//                     <td>Bartender</td>
//                 </tr>
//                 </tbody>
//             </table>
//         )
//     }
// }

export default Catalog