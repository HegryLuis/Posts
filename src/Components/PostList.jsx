import React from "react";
import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = ({ posts, title, remove }) => {
    if (!posts.length) {
        return (
            <div>
                <h1 style={{ textAlign: "center" }}>Посты не найдены!</h1>
            </div>
        );
    }

    return (
        <div className="post__list">
            <h1 style={{ textAlign: "center" }}>{title}</h1>

            <TransitionGroup className="list">
                {posts.map((post, index) => (
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="item"
                    >
                        <PostItem
                            number={index + 1}
                            post={post}
                            remove={remove}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
};

export default PostList;
