import React, { useEffect, useState } from 'react';
import {  NavLink } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
      fetch('categories.json')
      .then(response => response.json())
      .then(data => setCategories(data))
    
    //   return () => {
    //     second
    //   }
    }, [categories])
    
    return (
        <div className='text-start'>
            <h1>All Category</h1>
            {
                categories.map(category => 
                    <NavLink 
                    key={category.id}
                    className='block text-xl m-4 font-semibold'
                    to={`/category/${category.id}`}
                    >
                        {category.name}

                    </NavLink>
                )
            }
        </div>
    );
};

export default LeftSideNav;