import React, { useEffect, useState } from 'react';
import { client } from '../client';
import './ReviewList.css';

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const query = `*[_type == "review"] | order(_createdAt desc)`;
        const data = await client.fetch(query);
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="reviews-list-container">
      <h2>Reviews</h2>
      {reviews.map((review) => (
        <div className="review-item" key={review._id}>
          <p><span>Review:</span> {review.review}</p>
          <p><span>Cafes Visited:</span> {review.cafesVisited}</p>
          <p><span>Rating:</span> {review.rating}</p>
          <p><span>Submitted on:</span> {new Date(review._createdAt).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsList;