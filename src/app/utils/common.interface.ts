export interface UserInfo{
    username: string,
    name: string,
    id: number,
    phone: string,
    website: string,
    email: string,
    company: Record<string, string>,
    address: Record<string, any>
}

export interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}