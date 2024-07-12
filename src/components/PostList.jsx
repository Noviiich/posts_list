import React, { createRef } from "react";
import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = ({posts, title, remove}) => {
    if(!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
              Посты не найдены
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>
                {title}
            </h1>
            <TransitionGroup>
            {posts.map((post, index) => {
                    const nodeRef = createRef();
                    return (
                        <CSSTransition
                            key={post.id}
                            timeout={500}
                            classNames="post"
                            nodeRef={nodeRef}
                        >
                            <PostItem nodeRef={nodeRef} remove={remove} number={index + 1} post={post} />
                        </CSSTransition>
                    );
                })}
            </TransitionGroup>
        </div>
    );
}

export default PostList;