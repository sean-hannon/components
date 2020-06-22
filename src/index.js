import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">heat
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45pm" 
                    commentText="Nice blog post" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 2:00am" 
                    commentText="What are you talking about?" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Tom" 
                    timeAgo="Yesterday at 5:00pm" 
                    commentText="Where's the beef!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
