import React from 'react';

const BlogDetail = ({blog}) => {
    return (
        <div className="blog-card">
            <img className="img-fluid" src={blog.img} alt="" />
            <div className="p-3">
                <h4 className="text-center">{blog.name}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequatur non illum suscipit totam? Nesciunt vitae iusto voluptas! Ullam, dolore...</p>
                <a href="#" className="button-brand text-decoration-none" target="_blank">Read More</a>
            </div>
        </div>
    );
};

export default BlogDetail;