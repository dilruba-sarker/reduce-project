 const mobiles=[
    {
      id: 1,
      name: "iPhone 14 Pro",
      brand: "Apple",
      price: 1099
    },
    {
      id: 2,
      name: "Galaxy S23 Ultra",
      brand: "Samsung",
      price: 1199
    },
    {
      id: 3,
      name: "Pixel 8 Pro",
      brand: "Google",
      price: 999
    },
    {
      id: 4,
      name: "Xperia 1 V",
      brand: "Sony",
      price: 1299
    },
    {
      id: 5,
      name: "Redmi Note 13 Pro",
      brand: "Xiaomi",
      price: 349
    },
    {
      id: 6,
      name: "OnePlus 12",
      brand: "OnePlus",
      price: 749
    },
    {
      id: 7,
      name: "Moto Edge 40 Pro",
      brand: "Motorola",
      price: 799
    },
    {
      id: 8,
      name: "Nothing Phone 2",
      brand: "Nothing",
      price: 599
    }
  ]

  

  const displayAll=(mobiles)=>{
    const container=document.getElementById("display-container");
    container.innerHTML=' '
mobiles.forEach(mobile => {
   console.log( mobile.name);
   const dive=document.createElement("div")
   dive.innerHTML=
   `
   <h1>name: ${mobile.name}</h1>
   <h2>price: ${mobile.price}</h2>
   `
   container.appendChild(dive)
});


  }

  document.getElementById("sort-button").addEventListener("click",()=>{
    mobiles.sort((a,b)=>a.price-b.price)
    displayAll(mobiles)
  })
//   const sortByPrice = () => {
//     mobiles.sort((a, b) => a.price - b.price); // Sort mobiles by price (ascending)
//     displayAll(mobiles); // Re-display the sorted mobiles
//   };


//    document.getElementById("sort-button").addEventListener("click", sortByPrice);
 
displayAll(mobiles)