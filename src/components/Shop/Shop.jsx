
import { useState } from "react"
import { inventoryData } from "../../data/data"
import { InventoryList } from "../InventoryList/InventoryList"

const Shop = () => {

  const [inventory, setInventory] = useState(inventoryData)


  const handleAddItem = () => {
    const newItem = {_id: 62345, name: 'Banana', price: 0.27}
    const newItemTwo = { _id: 22345, name: 'Avocado', price: 2 };
    setInventory([newItem, newItemTwo])
  }

  return (
    <main>

        <h1>Shop</h1>
        
        <button onClick={handleAddItem} >Click Here</button>
        <InventoryList
         inventory={inventory}
        />

    </main>
  )
}

export default Shop