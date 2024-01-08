import * as z from "zod"

export const signUpFormSchema = z.object({
    organization: z.string().min(3, {
        message: "Organization name must be at least 3 characters"
    }),

    firstName: z.string().min(3, {
        message: "First name must be at least 3 characters"
    }),

    lastName: z.string().min(3, {
        message: "Last name must be at least 3 characters"
    }),

    imageUrl: z.string(),

    email: z.string().email(),

    country: z.string().min(3, {
        message: "You must provide a valid country"
    }),

    plan: z.object({
        type: z.string(),
        paid: z.boolean(),
    }).required(),


})