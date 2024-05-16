import { Description } from "@radix-ui/react-dialog"
import { z } from "zod"
import Category from "./database/models/category.model"

export const eventFormSchema = z.object({
    title: z.string().min( 3,'Title must be more than 3 characters' ),

    description: z.string().min( 3,'Description  must be more than 3 characters' ).max(400,'Description must be less the 400 characters.'),

    location: z.string().min(3,'Location must be at least 3 characters').max(400,'Location must be less the 400 characters.'),

    imageUrl: z.string(),

    startDateTime:z.date(),

    endDateTime:z.date(),

    categoryId:z.string(),

    prince:z.string(),

    isFree: z.string(),

    url:z.string().url(),



  })