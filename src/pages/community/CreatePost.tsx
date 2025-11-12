import { Award, Send } from "lucide-react"
import { useState } from "react"
import Button from "../../components/ui/Button"


const CreatePost = () => {
    const [newPost, setNewPost] = useState("")
    const handlePostClicked = () => {
        
    }
    return (
        <div className="rounded-xl bg-card text-card-foreground shadow">
            <div className="flex flex-col space-y-1.5 p-6">
                <h2 className="font-semibold leading-none tracking-tight">Share Your Progress</h2>
                <p className="text-sm text-muted-foreground">Inspire the community with your fitness journey</p>
            </div>
            <div className="space-y-4 p-6 pt-0">
                <textarea
                    placeholder="What's your fitness win today? Share it with the community..."
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    className="min-h-[100px] flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none"
                >
                </textarea>
                <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                        <Button className="border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"
                        >
                            <Award className="h-4 w-4 mr-2" />
                            Add Achievement
                        </Button>
                    </div>
                    <Button
                        className="bg-primary text-primary-foreground shadow hover:bg-primary/85 h-9 px-4 py-2"
                        onClick={handlePostClicked}
                    >
                        <Send className="h-4 w-4 mr-2" />
                        Post
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost