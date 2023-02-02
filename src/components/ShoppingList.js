import React from "react";

function ShoppingList({ shoppingItem }) {

    const {name, category} = shoppingItem
    return (
        <div>
            <h4>{name}</h4>
            <p>{category}</p>
        </div>
    )
}

export default ShoppingList;