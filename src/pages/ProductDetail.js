import { useParams } from 'react-router-dom';

export default function ProductDetail(props) {
  const params = useParams();

  return (
    <section>
      <h1>Details</h1>
      <p>{params.productId}</p>
    </section>
  );
}
