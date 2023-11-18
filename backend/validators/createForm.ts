import { z } from "zod";

const projects = z.object({
  title: z
    .string()
    .min(2, { message: "Title must be at least 2 characters long" }),
  description: z
    .string()
    .min(5, { message: "Description must be at least 5 characters long" }),
  webURL: z.string().url(),
  repoLink: z.string().url(),
  tags: z.array(z.string()),
  language: z.string(),
});

const links = z.object({
  title: z
    .string()
    .min(0, { message: "Title must be at least 2 characters long" }),
  url: z.string().url(),
  order: z.number(),
});

const skills = z.object({
  title: z
    .string()
    .min(2, { message: "Title must be at least 2 characters long" }),
  icom: z.string(),
});

const socials = z
  .object({
    type: z.string(),
    handle: z.string(),
    order: z.number(),
  })
  .superRefine((values, ctx) => {
    if (values.type == "Github" && !values.handle) {
      ctx.addIssue({
        message: "Github handle must be at least 1 character long",
        code: z.ZodIssueCode.custom,
        path: ["handle"],
      });
    }
  });

export const restFormSchema = z.object({
  interests: z
    .array(z.string())
    .min(1, { message: "Must have at least 1 tag" }),
  skills: z.array(skills).min(1, { message: "Must have at least 1 skill" }),
  socials: z.array(socials),
  links: z.array(links),
  projects: z.array(projects),
});

export const completeForm = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
  username: z
    .string()
    .min(1, { message: "Username must be at least 1 character long" }),
  about: z
    .string()
    .min(5, { message: "About must be at least 5 characters long" }),
  profession: z
    .string()
    .min(3, { message: "Profession must be at least 2 characters long" }),
  portfolio: z.string(),
  pronouns: z
    .string()
    .min(2, { message: "Pronouns must be at least 2 characters long" }),
  completedProfile: z.boolean(),
});

export type FormValues = z.infer<typeof restFormSchema>;
