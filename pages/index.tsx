export default function Home(products: string[] ) {
  // let products = ["chair", "bed", "house", "sofa"]
  return (
    <main>
      <h1>Products</h1>
      {products.map((product, i) => (
        <div key={i}>{product}</div>
      ))}
    </main>
  )
}
