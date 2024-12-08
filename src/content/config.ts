/* import { imageMetadata } from 'astro/assets/utils'; */
import { defineCollection, z, reference } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      draft: z.boolean(),
      // Transform string to Date object
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      updatedDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      categories: z.string().optional(),
      author: reference("authors"),
      tldrOne: z.string().optional(),
      tldrTwo: z.string().optional(),
      tldrThree: z.string().optional(),
      headerImage: z.object({
        src: image(),
        alt: z.string(),
      }),
      ogImg: z.string().optional(),
    }),
});

const authors = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/authors" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      authorName: z.string().optional(),
      authorImg: image(),
      authorWeb: z.string().optional(),
      authorX: z.string().optional(),
      authorLi: z.string().optional(),
      authorBio: z.string().optional(),
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      updatedDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
    }),
});

export const collections = { blog: blog, authors: authors };
