import './App.css';
import Header from './component/Header';
import ProductList from './component/ProductList';
import CartList from './component/CartList';
import { useState } from 'react';

function App() {
//ข้อมูลที่แสดง
  const [product, setProduct] = useState([
    {
      url: 'https://img.freepik.com/free-photo/raw-meat-white-plate-hot-pot-shabu-menu_1150-35269.jpg?w=1380&t=st=1666278133~exp=1666278733~hmac=7c6d16690184df09ae9e4bd6b6bce06a614a5e54706be069e048c6ead4e10842',
      name: 'หมูสได์',
      category: 'Pok-slice',
      price: 35
    },
    {
      url: 'https://img.freepik.com/free-photo/grilled-pork-plate_1339-4811.jpg?w=1380&t=st=1666279518~exp=1666280118~hmac=b63b03f20ee9e84204fcb60d4728ba22587efe13cedd68298844a080947ef29f',
      name: 'หมูอะไรเนี่ย',
      category: 'Pok-slice',
      price: 40
    },
    {
      url: 'https://img.freepik.com/free-photo/asian-dumplings-served-plate_1220-5148.jpg?w=1380&t=st=1666282774~exp=1666283374~hmac=9c6871a5f224513e72e51272c8e4f8ce32452ebc2d34296ef214afbbcd82f683',
      name: 'เกี้ยว',
      category: 'Pok-slice',
      price: 50
    },
    {
      url: 'https://img.freepik.com/free-photo/grilled-pork-plate_1339-4811.jpg?w=1380&t=st=1666279518~exp=1666280118~hmac=b63b03f20ee9e84204fcb60d4728ba22587efe13cedd68298844a080947ef29f',
      name: 'หมูสได์',
      category: 'Pok-slice',
      price: 35
    },
    {
      url: 'https://img.freepik.com/free-photo/raw-meat-white-plate-hot-pot-shabu-menu_1150-35269.jpg?w=1380&t=st=1666278133~exp=1666278733~hmac=7c6d16690184df09ae9e4bd6b6bce06a614a5e54706be069e048c6ead4e10842',
      name: 'หมูสได์',
      category: 'Pok-slice',
      price: 35
    },
    {
      url: 'https://img.freepik.com/free-photo/grilled-pork-plate_1339-4811.jpg?w=1380&t=st=1666279518~exp=1666280118~hmac=b63b03f20ee9e84204fcb60d4728ba22587efe13cedd68298844a080947ef29f',
      name: 'หมูสได์',
      category: 'Pok-slice',
      price: 35
    },
   
  ])
//ตระกร้าสินค้า
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }
//ส่วนแสดงผล
  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;