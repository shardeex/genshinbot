import { i18n } from "@gramio/i18n";
import { mediaCache } from "@gramio/media-cache";
import { prisma } from "@monorepo/db";
import { Bot } from "gramio";
import type { TypedFluentBundle } from "./locales.types";

const bot = new Bot(process.env.TOKEN as string)
	.extend(mediaCache())
	.extend(i18n<TypedFluentBundle>())
	.on("message", (context, next) => {
		context.i18n.setLocale(context.from?.languageCode ?? "en")
		return next(); })
	.command("start", (context) => context.send(
		context.t("hello-user", {
			userName: context.from?.firstName ?? "мама твоя тебе имени не дала что ли"
		})
	))
	.command("help", (context) => context.send(
		context.t("help", {})
	))
	.onStart(({ info }) => console.log(`✨ Bot ${info.username} was started!`));

prisma.$connect().then(async () => {
	console.log("🗄️ Database was connected!");
	await bot.start();
});
