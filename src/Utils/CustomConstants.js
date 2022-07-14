export const LOCAL_PATH = "http://localhost:8080/";
export const COMMENT_PATH = LOCAL_PATH + "comment/";
export const USER_PATH = LOCAL_PATH + "user/";
export const AVATAR_PATH = USER_PATH + "avatar";
export var avatarUrl = "";

export const setAvatarUrl = (url) => {
    avatarUrl = url;
}

