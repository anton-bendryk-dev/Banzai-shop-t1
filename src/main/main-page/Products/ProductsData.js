const productsData = [
    {
        id:1,
        name:"Samsung",
        description:"48-inch 1080p 60Hz Smart",
        type:"TV",
        price:1000,
        image:'./pictures/product-tv.png'
    },
    {
        id:2,
        name:"Samsung",
        description:"65-Inch 4K Ultra HD Smart",
        type:"TV",
        price:1500,
        image:'./pictures/product-tv3.png'
    },
    {
        id:3,
        name:"Samsung",
        description:"28-Inch 720p 60Hz LED TV ",
        type:"TV",
        price:800,
        image:'./pictures/product-tv2.png'
    },
    {
        id:4,
        name:"iPhone X",
        description:"256Gb Space Grey",
        type:"phone",
        price:1000,
        image:'./pictures/iPhoneX.png'
    },
    {
        id:5,
        name:"iPhone 11 Pro",
        description:"64GB Midnight Green",
        type:"phone",
        price:1400,
        image:'./pictures/iphone11pro.jpg'
    },
    {
        id:6,
        name:"iPhone 8 Plus",
        description:"256Gb (PRODUCT) RED(MRTA2)",
        type:"phone",
        price:700,
        image:'./pictures/iphone8.png'
    },
    {
        id:7,
        name:"Lenovo E595",
        description:"15.6 AMD-powered business laptop",
        type:"laptop",
        price:700,
        image:'./pictures/lenovo1.png'
    },
    {
        id:8,
        name:"Lenovo E14",
        description:"14 FHD display, Dolby Audio™",
        type:"laptop",
        price:800,
        image:'./pictures/lenovo3.png'
    },
    {
        id:9,
        name:"Lenovo L340",
        description:"15.6 fast laptop with enhanced audio",
        type:"laptop",
        price:750,
        image:'./pictures/lenovo2.png'
    },
    {
        id:10,
        name:"Apple iPad Pro 10.5",
        description:"Cellular 256Gb Rose",
        type:"tablet",
        price:800,
        image:'./pictures/ipud1.jpg'
    },
    {
        id:11,
        name:"Apple iPad Pro 11",
        description:"Cellular 64GB Space Grey",
        type:"tablet",
        price:1200,
        image:'./pictures/ipud2.jpg'
    },
    {
        id:12,
        name:"Apple iPad Mini 5",
        description:"Cellular 256GB Gold",
        type:"tablet",
        price:850,
        image:'./pictures/ipud3.jpg'
    },
]
export const getProductsMap = (array) => {
    return array.reduce((accObj,product)=>({
        ...accObj,
        [product.id]:product
    }),{})
}


export default productsData
