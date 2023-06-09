import { z } from "zod";
// import { api } from "~/utils/api";
import { Telegraf, Telegram } from "telegraf";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { env } from "../../../env.mjs"

const telegram = new Telegram(env.TELEGRAM_API, {
    // agent: null,
    webhookReply: true,
});
const bot = new Telegraf(env.TELEGRAM_API);

bot.use(async (ctx) => {
    const c = ctx.from;
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    await telegram.sendMessage(env.GHANSHYAM_TOKEN, `your id is ${c?.id}`);
})

void bot.launch();

export const hell = createTRPCRouter({
    paradise: publicProcedure
        .input(z.object({ name: z.string(), email: z.string(), message: z.string() }))
        .query(async ({ input }) => {
            await telegram.sendMessage(env.GHANSHYAM_TOKEN, `Name: ${input.name}\nEmail: ${input.email}\nMessage: ${input.message}`)
            return {
                name: `anime-name is ${input.name}`,
            };
        }),
    gha: publicProcedure
        .input(z.object({}))
        .query(({ }) => {
            return {
                pi: `ghanshyam thakkar`
            };
        }),
});
