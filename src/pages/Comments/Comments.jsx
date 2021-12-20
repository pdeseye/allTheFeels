import React from "react"
import * as postService from '../../services/postService'

//Components
import CommentList from './CommentList'
import CreateComment from './CreateComment'

const Comments = (props) => {

  const handleCreateComment = async (formData) => {
    try {
      const newComment = await postService.createComment(props.post._id, formData)
      props.setComments([...props.comments, newComment])
    } catch (error) {
      throw error
    }
  }
  console.log(props.comments)

  const handleDeleteComment = async (commentId) => {
    try {
      await postService.deleteComment(props.post._id, commentId)
      props.setComments(props.comments.filter(comment => comment._id !== commentId))
    } catch (error) {
      throw error
    }
  }

  return (
    <div className="comment-section">
      <h2>Comments</h2>
      <div className="card-header">
        <CreateComment 
          {...props} 
          handleCreateComment={handleCreateComment}
        />
        <CommentList
          comments={props.comments}
          handleDeleteComment={handleDeleteComment}
        />
      </div>
    </div>
  )
}

export default Comments