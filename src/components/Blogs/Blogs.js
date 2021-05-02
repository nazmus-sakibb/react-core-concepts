import React from 'react';
import blogOne from '../../images/blog-1.jpg';
import blogTwo from '../../images/blog-2.jpg';
import blogThree from '../../images/blog-3.jpg';
import BlogDetail from '../BlogDetail/BlogDetail';


const blogData = [
    {
        img: blogOne,
        name: 'JavaScript Error Monitoring'
    },
    {
        img: blogTwo,
        name: 'React Component in TypeScript'
    },
    {
        img: blogThree,
        name: 'JavaScript Libraries'
    }

]

const Blogs = () => {
    return (
        <div className="blogs-container">
            <div className="container-brand">
                <h2 className="text-center text-white">My Latest Blogs</h2>
                <div className="blogs pt-5">
                    {
                        blogData.map(blog => <BlogDetail blog={blog}></BlogDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;