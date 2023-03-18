import { Url } from "url"

export interface data  {
    thisProfile: {
        username: string,
        image: string,
        email: string,
        solved: number,
        posted: number,
        github : Url
    },
    profiles: [
        {
            username: string,
            image: string,
            email: string,
            solved: number,
            posted: number,
            github : Url
        }
    ],
    posts: [
        {
            id: string,
            date: string,
            user: {
                username: string,
                job:string,
                image: string,
            },
            title: string,
            points: number,
            description: string,
            githubLink: Url,
            archived: { post_helper_id: string, status: boolean },
            post_helpers: [
                { id: string },
            ]
        },
    ],

    post_helper: [
        {
            id:string,
            user: {
                username: string,
                job:string,
                image: string,
            },
            description: string,
            githubLink: Url,
        },
    ],

}