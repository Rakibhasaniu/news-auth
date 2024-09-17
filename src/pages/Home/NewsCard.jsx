import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { title, author, _id, others_info, category_id, rating, total_view, thumbnail_url, image_url, details } = news;
    return (
        <div className="card bg-base-100 border-b-2  shadow-xl">
            <figure>
                <img
                    src={image_url}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{author.name}</h2>
                <p>{title}</p>

                {

                    details.length > 200 ?
                    <p>{details.substring(0, 200)}...<Link to={`/news/${_id}`} className='text-blue-800 font-bold'>Read More..</Link></p> 
                    : 
                    <p>{details}</p>
                    
                }

                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;