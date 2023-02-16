import React from "react";
import Image from '../Image';
import DateTime from "../DateTime";
import Description from '../Description';
import Engagement from "../Engagement";
import './Blog.css'

function Blog() {
    return (
        <div className='card-item'>
            <Image />
            <div className="card-description">
                <DateTime />
                <Description />
                <Engagement />
            </div>
        </div>
    );
}

export default Blog;