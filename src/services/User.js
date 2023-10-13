import $api from "../http";

class User {
    static fetchUserList() {
        return $api('/users')
    }

    static fetchUserPosts() {
        return $api(`/posts`)
    }

    static fetchUserAlbums() {
        return $api(`/albums`)
    }
}

export default User;