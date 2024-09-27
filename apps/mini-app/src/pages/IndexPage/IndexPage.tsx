import { useInitData } from "@telegram-apps/sdk-react";

import { List, Card } from "@telegram-apps/telegram-ui";
import type { FC } from "react";

import { NavigationBar } from "@/components/NavigationBar";

import "./IndexPage.css"


export const IndexPage: FC = () => {

	const initData = useInitData();

	return <List className="index-page__list">
		<Card type="plain" className="index-page__card">
			<Card.Chip readOnly>
				@{initData?.user?.username}
			</Card.Chip>
			<img
				className="index-page__card-img"
				alt="Profile card"
				src="https://gi.yatta.moe/assets/UI/namecard/UI_NameCardPic_Mona_P.png"
			/>
			<Card.Cell>
				{initData?.user?.firstName} {initData?.user?.lastName}
			</Card.Cell>
		</Card>
		<Card type="plain" className="index-page__card">
			<Card.Chip readOnly>
				@{initData?.user?.username}
			</Card.Chip>
			<img
				className="index-page__card-img"
				alt="Profile card"
				src="https://gi.yatta.moe/assets/UI/namecard/UI_NameCardPic_Mona_P.png"
			/>
			<Card.Cell>
				{initData?.user?.firstName} {initData?.user?.lastName}
			</Card.Cell>
		</Card>
		<Card type="plain" className="index-page__card">
			<Card.Chip readOnly>
				@{initData?.user?.username}
			</Card.Chip>
			<img
				className="index-page__card-img"
				alt="Profile card"
				src="https://gi.yatta.moe/assets/UI/namecard/UI_NameCardPic_Mona_P.png"
			/>
			<Card.Cell>
				{initData?.user?.firstName} {initData?.user?.lastName}
			</Card.Cell>
		</Card>
		<NavigationBar currentTabId="index"/>
	</List>
}
