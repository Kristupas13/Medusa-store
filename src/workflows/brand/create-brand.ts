import { createWorkflow, WorkflowResponse } from "@medusajs/workflows-sdk"
import { createBrandStep, CreateBrandStepInput } from "./steps/create-brand"

export interface CreateBrandWorkflowInput {
    name: string
    description?: string
    logo_url?: string
}

export const createBrandWorkflow = createWorkflow(
    "create-brand-workflow",
    (input: CreateBrandWorkflowInput) => {
        // Execute the create brand step - no need to pass input, it comes from workflow input
        const brand = createBrandStep(input)

        // Future: Add more steps here (email notifications, indexing, etc.)

        return new WorkflowResponse(brand)
    }
)