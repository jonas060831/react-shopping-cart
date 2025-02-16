
import { useState } from "react"
import { inventoryData } from "../../data/data"
import { InventoryList } from "../InventoryList/InventoryList"

import './Shop.css'

const Shop = () => {

  const [shopInventory, setShopInventory] = useState(inventoryData)
  const [userInventory, setUserInventory] = useState([])

  const handleAddItem = (item) => {
    setUserInventory([...userInventory, item])
    setShopInventory(shopInventory.filter( (storeItem) => storeItem._id !== item._id))
  }

  const handleRemoveItem = (item) => {
    setShopInventory([...shopInventory, item])
    setUserInventory(userInventory.filter(shopItem => shopItem._id !== item._id))
  }

  return (
    <main>

        <h1>Shop</h1>
        
        <section className="shop-section">
            <InventoryList
            title='Shop Inventory'
            inventory={shopInventory}
            handleAddItem={handleAddItem}
            />

            <InventoryList
            inventory={userInventory}
            title='User Inventory'
            handleRemoveItem={handleRemoveItem}
            />
        </section>

    </main>
  )
}

export default Shop