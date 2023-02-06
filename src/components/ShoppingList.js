import React from "react";

function ShoppingList({ shoppingItem }) {

    const {name, category} = shoppingItem
    return (  
            <li className={shoppingItem.isBought ? "is-bought" : ""}>
            <span>{name}</span>
            <span className="category">{category}</span>
            </li>
    )
}

export default ShoppingList;