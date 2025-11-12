import { posts } from "../../constant/data"
import type { PostProps } from "../../constant/types"
import CreatePost from "./CreatePost"
import PostCard from "./PostCard"
import Sidebar from "./Sidebar"


const Main = () => {
    return (
        <div className="grid lg:grid-cols-3 gap-6">
            {/* Main */}
            <div className="lg:col-span-2 space-y-6">
                <CreatePost /> 
                <div className="space-y-6">
                    {
                        posts.map((post: PostProps, index) => (
                            <PostCard post={post} key={index} />
                        ))
                    }
                </div>
            </div>
            {/* Sidebar */}
            <Sidebar />
       
        </div>
    )
}

export default Main