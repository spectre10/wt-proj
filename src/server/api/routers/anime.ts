import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const hell = createTRPCRouter({
  paradise: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return {
        name: `anime-name is ${input.name}`,
      };
    }),
  gha: publicProcedure
    .input(z.object({}))
    .query(({})=>{
        return {
            pi: `ghanshyam thakkar`
        };
    }),
});
