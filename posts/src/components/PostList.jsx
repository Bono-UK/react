import React from 'react';
import PostItem from "./PostItem.jsx";

const PostList = ({posts, title, remove}) => {

    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Посты не найдены!
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
        <PostItem remove={remove} number={index + 1} post={post} />
                
        </div>
    );
};

export default PostList;
