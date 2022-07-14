export class UserPayload {
    constructor(userId, username, realName, profileImageUrl) {
        this.userId = userId;
        this.username = username;
        this.realName = realName;
        this.profileImageUrl = profileImageUrl;
    }
}