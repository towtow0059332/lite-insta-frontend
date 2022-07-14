export class CommentPayload {
    constructor(commentId, userId, postId, timestamp, comment) {
        this.commentId = commentId;
        this.userId = userId;
        this.postId = postId;
        this.timestamp = timestamp;
        this.comment = comment;
    }
}