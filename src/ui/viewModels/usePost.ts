import Post from "@entities/post"
import PostPresenter from "src/adapters/presentation/post"

const { like, unlike } = new PostPresenter()

const usePost = (post) => {

    const amILike = post.amILike == 1

    return {
        amILike,
        reaction: () => {
            console.log('amILike: ', amILike);
            if (amILike) {
                unlike(post._id)
            } else {
                like(post._id)
            }
        }
    }
}

export default usePost