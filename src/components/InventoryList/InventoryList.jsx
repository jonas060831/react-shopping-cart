import React from 'react'

export const InventoryList = (props) => {
  return (
    <div>
        <h2>Inventory List</h2>
        <ul>
            {
                props.inventory.map(item => (
                    <li>
                        <p>{item.name}</p>
                        Price: {item.price}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
