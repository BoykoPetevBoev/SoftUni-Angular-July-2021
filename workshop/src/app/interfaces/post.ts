export interface InterfacePost {
    created_at: string
    likes: string[]
    text: string
    themeId: {
        created_at: string
        posts: string[]
        subscribers: string[]
        themeName: string
        updatedAt: string
        userId: string
        __v: number
        _id: string
    }
    updatedAt: string
    userId: {
        created_at: string
        email: string
        password: string
        posts: string[]
        tel: string
        themes: string[]
        updatedAt: string
        username: string
        __v: number
        _id: string
    }
    __v: number
    _id: string
}