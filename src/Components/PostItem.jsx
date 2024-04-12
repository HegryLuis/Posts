import React from "react";
import MyButton from "./UI/Button/MyButton";

const PostItem = (props) => {
    return (
        <div className="post__item">
            <div className="post__text">
                <div className="post__title">
                    {props.number}.{props.post.title}
                </div>
                <div className="post__description">
                    {props.post.description}
                </div>
            </div>
            <MyButton
                onClick={() => props.remove(props.post)}
                className="post__butt"
            >
                X
            </MyButton>
        </div>
    );
};

export default PostItem;
