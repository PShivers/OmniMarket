import Home from "../src/components/Home"

export default function Index(products: string[] ) {
  // let products = ["chair", "bed", "house", "sofa"]
  return (
    <main>
      <Home/>
      {/* <h1>Products</h1>
      {products.map((product, i) => (
        <div key={i}>{product}</div>
      ))} */}
    </main>
  )
}
