import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const params = useParams();

  console.log(params.productName);

  return (
    <section>
      <h1>Product Detail</h1>
      <div>{params.productName}</div>
    </section>
  );
};

export default ProductDetail;
