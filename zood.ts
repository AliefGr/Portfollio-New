import {z} from "zod"

const useShecema = z.object(
    {
        username  : z.string,
    }
)

const user = {username : "alief"}
console.log(useShecema.parse(user))
