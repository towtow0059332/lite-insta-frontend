export class PostPayload {
    constructor(postId, userId, postPath, timestamp, likeCount) {
        this.postId = postId;
        this.userId = userId;
        this.postPath = postPath;
        this.timestamp = timestamp;
        this.likeCount = likeCount;
    }
}