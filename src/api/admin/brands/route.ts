import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { createBrandWorkflow } from "../../../workflows/brand/create-brand"
import { CreateBrandSchema } from "./validators"

export interface CreateBrandRequest {
    name: string
    description?: string
    logo_url?: string
}

export const POST = async (
    req: MedusaRequest<CreateBrandRequest>,
    res: MedusaResponse
) => {
    // Validate request body
    const validatedData = CreateBrandSchema.parse(req.body)

    // Execute the workflow
    const { result: brand } = await createBrandWorkflow(req.scope).run({
        input: validatedData,
    })

    res.status(201).json({ brand })
}