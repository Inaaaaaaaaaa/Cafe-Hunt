import React, { useState } from 'react';
import { client } from '../client';
import './ReviewForm.css';

const ReviewForm = () => {
  const [review, setReview] = useState('');
  const [cafesVisited, setCafesVisited] = useState('');
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const doc = {
        _type: 'review',
        review,
        cafesVisited,
        rating,
      };
      await client.create(doc);
      setReview('');
      setCafesVisited('');
      setRating(0);
      setSubmitted(true);
      alert('Review submitted successfully!');
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Error submitting review. Please try again.');
    }
  };

  return (
    <div className="review-form-container">
      {submitted ? (
        <p>Thank you for your review!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write your review here"
            required
          />
          <textarea
            value={cafesVisited}
            onChange={(e) => setCafesVisited(e.target.value)}
            placeholder="Cafes you visited"
            required
          />
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            min="0"
            max="5"
            placeholder="Rating (0-5)"
            required
          />
          <button type="submit">Submit Review</button>
        </form>
      )}
    </div>
  );
};

export default ReviewForm;