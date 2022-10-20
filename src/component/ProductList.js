import '../App.css';
//ส่วนการ์ด
function ProductList({ product,addToCart }) {
    return (
        <div className='flex'>
            {
                product.map((productItem, productIndex) => {
                    return (
                        <div style={{ width: '33%' }}>
                            <div className='product-item'>
                                <img src={productItem.url} width="100%" />
                                <p>ชื่อเมนู {productItem.name} | {productItem.category} </p>
                                <p>  {productItem.price} บาท</p>
                                <button
                                    onClick={() => addToCart(productItem)}
                                >Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList