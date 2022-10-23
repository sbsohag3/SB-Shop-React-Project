import useReviews from "../../hooks/useReviews";
import Loading from "../Shared/Loading";

import Review from "./Review";

const ProductsReviews = () => {
  const [reviews]= useReviews()
  // if (reviews) {
  //   return <Loading />;
  // }
  return (
    <section className="lg:my-12 lg:px-12">
      <h2 className="my-10 text-3xl font-bold text-center text-info">What our Client say</h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reviews.slice(0, 6).map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default ProductsReviews;
