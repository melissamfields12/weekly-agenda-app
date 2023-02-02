import React from "react";
import ShoppingList from "./ShoppingList";

function ShoppingContainer({ shoppingList }) {

    const mappedList = shoppingList.map((shoppingItem) => 
    <ShoppingList 
    key={shoppingItem.id}
    shoppingItem={shoppingItem}
    />
   )

    return (
        <div>
            {mappedList}
        </div>
    )
}

export default ShoppingContainer;