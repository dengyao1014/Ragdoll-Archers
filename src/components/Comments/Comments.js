import React, { useState } from 'react';
import styled from 'styled-components';

const CommentsContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
  background: #2a2a2a;
  border-radius: 8px;
`;

const CommentForm = styled.form`
  margin-bottom: 20px;
`;

const RatingInput = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  
  button {
    background: none;
    border: none;
    color: #666;
    font-size: 24px;
    cursor: pointer;
    
    &.active, &:hover {
      color: #ffd700;
    }
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  background: #333;
  border: 1px solid #444;
  color: white;
  margin-bottom: 10px;
  min-height: 80px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`;

const SubmitButton = styled.button`
  background: #4a90e2;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background: #357abd;
  }
`;

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const CommentItem = styled.div`
  padding: 15px;
  background: #333;
  border-radius: 4px;
  
  .rating {
    color: #ffd700;
    margin-bottom: 5px;
  }
  
  .content {
    color: #fff;
  }
  
  .date {
    color: #666;
    font-size: 0.8rem;
    margin-top: 5px;
  }
`;

const Comments = ({ gameId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0 || !comment.trim()) return;

    const newComment = {
      id: Date.now(),
      rating,
      content: comment,
      date: new Date().toLocaleString('en-US')
    };

    setComments([newComment, ...comments]);
    setRating(0);
    setComment('');
  };

  return (
    <CommentsContainer>
      <h3>Reviews & Ratings</h3>
      <CommentForm onSubmit={handleSubmit}>
        <RatingInput>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className={star <= rating ? 'active' : ''}
              onClick={() => setRating(star)}
            >
              ★
            </button>
          ))}
        </RatingInput>
        <TextArea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your review..."
        />
        <SubmitButton type="submit">Submit Review</SubmitButton>
      </CommentForm>

      <CommentList>
        {comments.map((item) => (
          <CommentItem key={item.id}>
            <div className="rating">{'★'.repeat(item.rating)}</div>
            <div className="content">{item.content}</div>
            <div className="date">{item.date}</div>
          </CommentItem>
        ))}
      </CommentList>
    </CommentsContainer>
  );
};

export default Comments;