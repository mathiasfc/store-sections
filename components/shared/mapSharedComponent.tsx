import Placeholder from "./placeholder";
import SharedComponentWithProps from "./sharedComponentWithProps";
import ProductComparison from "./productsComparison";
import ProductCard from "./productCard";
import ProductList from "./productList";

const sharedComponents = {
  placeholder: Placeholder,
  sharedComponentWithProps: SharedComponentWithProps,
  productComparison: ProductComparison,
  productCard: ProductCard,
  productList: ProductList,
};

export default function MapSharedComponent(props) {
  const Component = sharedComponents[props.componentName];

  console.log(props);

  return <Component {...props} />;
}
