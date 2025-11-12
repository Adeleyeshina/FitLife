///import { Award } from "lucide-react"


const CreatePost = () => {
  return (
      <div className="rounded-xl bg-card text-card-foreground shadow">
          <div className="flex flex-col space-y-1.5 p-6">
              <h2 className="font-semibold leading-none tracking-tight">Share Your Progress</h2>
              <p className="text-sm text-muted-foreground">Inspire the community with your fitness journey</p>
          </div>
          {/* <div className="space-y-4 p-6 pt-0">
              <Textarea
                  placeholder="What's your fitness win today? Share it with the community..."
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  className="min-h-[100px]"
              />
              <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                          <Award className="h-4 w-4 mr-2" />
                          Add Achievement
                      </Button>
                  </div>
                  <Button>
                      <Send className="h-4 w-4 mr-2" />
                      Post
                  </Button>
              </div>
          </div> */}
      </div>
  )
}

export default CreatePost