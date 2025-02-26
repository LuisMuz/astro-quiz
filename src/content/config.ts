import {defineCollection, z} from "astro:content";

const material = defineCollection({
    schema: z.object({
        subject: z.string(),
        img: z.string(),
        description: z.string(),
    })
})

export const collections = { material }