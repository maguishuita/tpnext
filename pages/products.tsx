import ProductPage from "../components/ProductPage";

export default function Products() {
    return <ProductPage/>;
}
function ProductPage() {
    return (
        <div>
            <h1>Our Products List</h1>
            <ul>
                <li>PHONES</li>
                <li>COMPUTERS</li>
                <li>TV</li>
            </ul>
        </div>
    );
}
export default ProductPage;