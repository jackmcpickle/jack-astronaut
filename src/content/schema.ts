import { defineCollection, z, reference } from 'astro:content';

export const collections = {
    news: defineCollection({
        type: 'content',
        schema: z.object({
            title: z.string(),
            description: z.string(),
            publishDate: z.coerce.date(),
            author: reference('authors'),
            tags: z.array(z.string()),
            img: z.string(),
            img_alt: z.string().optional(),
        }),
    }),
     authors: defineCollection({
        type: 'data',
        schema: z.object({
            name: z.string(),
            email: z.string().email(),
        })
    })
};
