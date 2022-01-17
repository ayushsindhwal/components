import { Grid } from "@mui/material";
import Samplecard from "./components/card/samplecard";
import products from "./utils/products.json"

function App() {

  return (
    <div className="App">
    <Grid container spacing={{ xs: 2, md: 2}} columns={{ xs: 4, sm: 8, md: 12 }}>
    {products.products.map((product, index)=>(
      <Grid item xs={2} sm={3} md={3} key={product.id}>
      <Samplecard product={product} index={index}  />
      </Grid>
      ))}
    </Grid>
    </div>
  );
}

export default App;
