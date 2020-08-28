import React from 'react';
import './Course.css';
import { Button } from 'react-bootstrap';

const Course = (props) => {
    const { name, duration, price, image } = props.course;
    return (
        <div className="course">
            <div>
                <img src={image} alt="" />
            </div>
            <div className="course-detail">
                <h2>Name: {name}</h2>
                <h5>Duration: {duration}</h5>
                <h4>Price: {price}</h4>
                <Button variant="success" onClick={() => (props.handleButton(props.course)) }>Enrol Now</Button>
            </div>
        </div>
    );
};

export default Course;