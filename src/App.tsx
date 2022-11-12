import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListItem from "./components/ListItem";
import NonValuesFound from "./components/NoValuesFound";
import Layout from "./container/Layout";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

const App:React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/items" element={<ListItem />} />
          <Route path="/items/:id" element={<ProductDetail />} />
          <Route path="/*" element={<NonValuesFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
export default App;
