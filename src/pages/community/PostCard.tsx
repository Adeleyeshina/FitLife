import React from 'react'
import type { PostProps } from '../../constant/types'
import { Award, Heart, MessageCircle, Share2 } from 'lucide-react'
import Badge from '../../components/ui/Badge'

interface PostCardProps {
    post : PostProps
}

const PostCard : React.FC<PostCardProps> = ({post}) => {
    return (
        <div key={post.user.name} className="hover:shadow-lg transition-shadow rounded-xl bg-card text-card-foreground shadow border border-gray-200">
            <div className='flex flex-col space-y-1.5 p-6'>
                <div className="flex items-start gap-4">
                    <div className="h-12 w-12 relative flex shrink-0 overflow-hidden rounded-full">
                        {post.user.avatar ? (
                            <img
                                src={post.user.avatar}
                                alt={`${post.user.initials}'s avatar`}
                                className="aspect-square h-full w-full rounded-full object-cover"
                            />
                        ) : (
                            <h1 className="bg-primary text-primary-foreground flex h-full w-full items-center justify-center rounded-full">
                                {post.user.initials}
                            </h1>
                        )}
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold">{post.user.name}</span>
                            <Badge className="text-xs border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                {post.user.badge}
                            </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">{post.timestamp}</div>
                    </div>
                </div>
            </div>
            <div className="space-y-4 p-6 pt-0">
                {post.achievement && (
                    <div className="bg-primary/10 border-primary/20 rounded-lg p-3 flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" />
                        <span className="font-medium text-primary">{post.achievement}</span>
                    </div>
                )}

                <p className="text-foreground leading-relaxed">{post.content}</p>

                {post.image && (
                    <div className="rounded-lg overflow-hidden bg-muted h-64" />
                )}

                <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <Heart className="h-5 w-5" />
                        <span className="font-medium">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <MessageCircle className="h-5 w-5" />
                        <span className="font-medium">{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <Share2 className="h-5 w-5" />
                        <span className="font-medium">Share</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PostCard