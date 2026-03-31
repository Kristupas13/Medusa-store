import { z } from "zod"

export const CreateBrandSchema = z.object({
    name: z.string().min(1, "Brand name is required").max(255, "Name too long"),
    description: z.string().max(1000, "Description too long").optional(),
    logo_url: z.string().url("Invalid URL format").optional(),
})