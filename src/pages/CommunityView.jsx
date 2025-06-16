import React, { useState } from 'react';
import '../assets/css/CommunityView.css';

const CommunityView = () => {
  const [post, setPost] = useState("مرحبا بكم في المجتمع!");
  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  const deleteComment = (index) => {
    const newComments = [...comments];
    newComments.splice(index, 1);
    setComments(newComments);
  };

  return (
    <div className="community-view">
      <h2>عرض المجتمع</h2>
      <div className="post">
        <p>{post}</p>
        <button onClick={() => setLikes(likes + 1)}>❤️ {likes}</button>
      </div>
      <div className="comments">
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="أضف تعليقك"
        />
        <button onClick={handleComment}>إضافة تعليق</button>
        <ul>
          {comments.map((c, i) => (
            <li key={i}>
              {c} <button onClick={() => deleteComment(i)}>🗑️</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommunityView;
