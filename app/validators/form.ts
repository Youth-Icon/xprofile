import { z } from "zod";

const projects = z.object({
    title: z.string().min(2, { message: "Title must be at least 2 characters long" }),
    description: z.string().min(5, { message: "Description must be at least 5 characters long" }),
    webURL: z.string().url(),
    repoLink: z.string().url(),
    tags: z.array(z.string()),
    language: z.string(),
    upVote: z.number(),
})

const links = z.object({
    title: z.string().min(0, { message: "Title must be at least 2 characters long" }),
    url: z.string().url(),
})

const socials = z.object({
    type: z.string(),
    handle: z.string(), 
    clicks: z.number(),
  }).superRefine((values, ctx) => {
    if (values.type == "Github" && !values.handle) {
      ctx.addIssue({
        message: "Github handle must be at least 1 character long",
        code: z.ZodIssueCode.custom,
        path: ['handle'],
      });
    }
  });



export const formSchema = z.object({
    email: z.string().email(),
    name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
    username: z.string().min(1, { message: "Username must be at least 1 character long" }),
    avatar: z.string().url(),
    about: z.string().min(5, { message: "About must be at least 5 characters long" }),
    color: z.string().includes("#", { message: "Color must be a valid hex code" }),
    tags: z.array(z.string()).min(1, { message: "Must have at least 1 tag" }),
    location: z.string().min(2, { message: "Location must be at least 2 characters long" }),
    portfolio: z.string(),
    socials: z.array(socials),
    links: z.array(links),
    // projects: z.array(projects)
});


export type FormValues = z.infer<typeof formSchema>;