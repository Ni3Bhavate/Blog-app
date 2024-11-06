import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';
import './styles.css';

const BlogItem = ({
  blog: {
    id,
    cover,
    category,
    title,
    description,
    authorAvatar,
    authorName,
    createdAt,
  
  },
}) => {
  return (
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={cover} alt='cover' />
      <Chip label={category}/>
      <h3>{title}</h3>
      <p className='blogItem-desc'>{description}</p>
      <footer>
        <div className='blogItem-author'>
          <img src={authorAvatar} alt='avatar' />
          <div>
            <h5>{authorName}</h5>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className='blogItem-link' to={`/blog/${id}`}>
          ➝
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;

