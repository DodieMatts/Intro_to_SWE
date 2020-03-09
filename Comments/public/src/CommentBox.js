import React, { Component } from 'react';
import Comment from './Comment.js';
import CommentForm from './CommentForm.js';

class CommentBox extends Component {
constructor() {
	super();

	this.state = {
		showComments: false,
            comments:  [
              {id: 1, author:"Cecilia Cooke", body:"Great work son Im really proud of you!"},
              {id: 2, author:"Denis Cooke", body:"Excellent progress being made"},
              {id: 3, author:"Denis Cooke", body:"Excellent progress being made"},
              {id: 4, author:"Denis Cooke", body:"Excellent progress being made"}
            ]
	};
}

  render() {
     const comments = this._getComments();
     let commentNodes;
     let buttonText = 'Show Comments';

     if (this.state.showComments){
     	commentNodes = <div className="comment-list"> {comments} </div>;
     }

     if (this.state.showComments) {
     	buttonText = 'Hide Comments'
     }


    return(
    <div className="comment-box">
    <CommentForm addComment={this._addComment.bind(this)} />
        {/*<h4 className="comment-count"> {this._getCommentsTitle(comments.length)}*/}
        	{/*<div>
  	        	<button onClick={this._handleClick.bind(this)} variant="outline-secondary" className="comment-footer-hide"> {buttonText} </button>
  	    	</div>*/}
  	  {/*</h4>*/}
  	        	{/*<div className="comment-list">
  	            {commentNodes}
         		</div>*/}
    </div>
          );
  }

    _getComments()
{
  return this.state.comments.map((comment) => {
        return (
          <Comment
          author= {comment.author}
          body= {comment.body}
          key={comment.id} />
          );
        });

}

_getCommentsTitle(commentCount) {
	  if(commentCount === 0){
	    return 'No Comments yet';
	  } else if (commentCount === 1){
	    return '1 Comment';
	  } else {
	    return `${commentCount} comments`;
	  }
}

_handleClick() {
	this.setState ({
		showComments: !this.state.showComments
	});
}

_addComment(author, body) {
  const comment = {
      id: this.state.comments.length + 1,
      author,
      body
    };
    this.setState({comments: this.state.comments.concat([comment]) });
}


}

export default CommentBox;
