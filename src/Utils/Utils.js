import {setAvatarUrl, USER_PATH} from "./CustomConstants";

export const postRequestOptions = (payload) => {
    return {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
    }
}

export const getAvatar = (userId) => {
    const userURL = USER_PATH + userId;
    fetch(userURL)
        .then(response => response.json())
        .then(data => {
            setAvatarUrl(data.profileImageUrl);
        })
        .catch(error => console.log(error));
}
