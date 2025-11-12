type User = {
    name: string,
    avatar: string,
    initials: string,
    badge: string
}
export interface PostProps {
    user: User,
    timestamp: string,
    content: string,
    image: string,
    likes: number,
    comments: number,
    achievement: string | null
}