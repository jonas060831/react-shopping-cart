
import { useState } from "react"
import { inventoryData } from "../../data/data"
import { InventoryList } from "../InventoryList/InventoryList"

import './Shop.css'

const Shop = () => {

  const [shopInventory, setShopInventory] = useState(inventoryData)
  const [userInventory, setUserInventory] = useState([])

  const handleAddItem = () => {


  }

  return (
    <main>

        <h1>Shop</h1>
        
        <section className="shop-section">
            <InventoryList
            inventory={shopInventory}
            />

            <InventoryList
            inventory={userInventory}
            title='User Inventory'
            />
        </section>

    </main>
  )
}

export default Shop