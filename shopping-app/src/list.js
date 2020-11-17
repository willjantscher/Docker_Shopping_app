//display the list

const List = (props) => {
    let shoppingList = props.list.map((item) => {
        return (
                <tr>
                    <td>{item.item}</td>
                    <td>{item.qty}</td>
                    <td>{item.unit}</td>
                </tr>
        )
    })
    return (
        <table>
            <thead>
                <tr>
                    <td>Item</td>
                    <td>Quantity</td>
                    <td>Unit</td>
                </tr>
            </thead>
            <tbody>{shoppingList}</tbody>
        </table>
    )
}

export default List;