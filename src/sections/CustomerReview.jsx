const CustomerReview = () => {
  const reviews = [
    { id: 1, name: 'John Doe', comment: 'Great product!', rating: 5 },
    { id: 2, name: 'Jane Smith', comment: 'Excellent service!', rating: 4 },
    { id: 3, name: 'Mike Johnson', comment: 'Highly recommended!', rating: 5 }
  ];

  return (
    <div>
      <h2>Customer Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id}>
          <h3>{review.name}</h3>
          <p>{review.comment}</p>
          <p>Rating: {review.rating}/5</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerReview;
