import React, { useState } from 'react';
import './MainSite.css'

import Course from '../CourseList/Course';
import courseData from '../../fakeData/courseData';
import Cart from '../Cart/Cart';

const MainSite = () => {
    const [course, setCourse] = useState(courseData);
    const [cart, setCart] = useState([])

    const handleButton = ((course)=>{
        const newCart = [...cart, course];
        setCart(newCart);
    })

    return (
        <div className="mainSite">
            <div className="course-container">
                {
                    course.map((course)=>(
                        <Course course={course} handleButton={handleButton}></Course>
                    ))
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default MainSite;