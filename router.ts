import { os } from '@orpc/server';
import { z } from 'zod';

const PlanetSchema = z.object({
  id: z.number().int().min(1),
  name: z.string(),
  description: z.string().optional(),
})

export const findPlanet = os
  .input(z.object({ id: z.coerce.number().int().min(1) }))
  .output(PlanetSchema)
  .handler(async ({ input }) => {
    // your find code here
    return { id: 1, name: 'name', description: 'hi friend' }
  })


export const router = {
  planet: {
    find: findPlanet,
  }
};

export type AppRouter = typeof router;