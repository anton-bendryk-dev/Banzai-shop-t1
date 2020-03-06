const productsData = [
    {
        id:1,
        name:"iPhone X",
        description:"This is iPhone X",
        type:"phone",
        price:500,
        image:'./pictures/product-tv.png'
    },
    {
        id:2,
        name:"iPhone XS",
        description:"This is iPhone XS",
        type:"phone",
        price:1500,
        image:'./pictures/product-tv3.png'
    },
    {
        id:3,
        name:"iPhone XS Max",
        description:"This is iPhone XS Max",
        type:"phone",
        price:1000,
        image:'./pictures/product-tv.png'
    },
    {
        id:4,
        name:"iPhone 8 plus",
        description:"This is iPhone 8 plus",
        type:"phone",
        price:1000,
        image:'./pictures/product-tv.png'
    },
]
export const getProductsMap = (array) => {
    return array.reduce((accObj,product)=>({
        ...accObj,
        [product.id]:product
    }),{})
}


export default productsData
