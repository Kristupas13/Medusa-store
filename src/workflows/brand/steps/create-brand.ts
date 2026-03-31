import { createStep, StepResponse } from "@medusajs/workflows-sdk"
import { BRAND_MODULE } from "../../../modules/brand"

export interface CreateBrandStepInput {
    name: string
    description?: string
    logo_url?: string
}

export const createBrandStep = createStep(
    "create-brand-step",
    async (input: CreateBrandStepInput, { container }) => {
        const brandModuleService: any = container.resolve(BRAND_MODULE)

        console.log(brandModuleService);
        // Try the method name pattern from README: create + ModelName
        const brand = await brandModuleService.createBrands(input)

        // Return the brand and provide compensation data
        return new StepResponse(brand, brand.id)
    },
    async (brandId: string | undefined, { container }) => {
        if (!brandId) return

        const brandModuleService: any = container.resolve(BRAND_MODULE)
        await brandModuleService.deleteBrands(brandId)
    }
)