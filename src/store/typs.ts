export type AccountInfo = {
  address: string
  amount: string
  createdAt: string
  email: string
  following: string
  followingClick: boolean
  followingCount: number
  id: string
  logout: string
  name: string
  replyClick: boolean
  replyCount: number
  replyUrl: string
  settingUrl: string
  shareUrl: string
  tasks: Tasks[]
  twitterId: string
  twitterUrl: string
  updatedAt: string
  username: string
}

export interface Tasks {
  amount: number
  createdAt: string
  id: string
  taskId: number
  updatedAt: string
  user: User
  userId: string
}

export interface User {
  address: string
  createdAt: string
  email: string
  followingClick: boolean
  followingCount: number
  id: string
  name: string
  replyClick: boolean
  replyCount: number
  tasks: Array<string>
  twitterId: string
  updatedAt: string
  username: string
}
