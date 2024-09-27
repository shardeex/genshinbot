import type { ComponentType, JSX } from "react";

import { IndexPage } from "@/pages/IndexPage/IndexPage";
import { ProfilePage } from "@/pages/ProfilePage/ProfilePage";


interface Route {
	path: string;
	Component: ComponentType;
	title?: string;
	icon?: JSX.Element;
}

export const routes: Route[] = [
	{
		path: "/",
		Component: IndexPage,
		title: "Home"
	
	},
	{
		path: "/profile",
		Component: ProfilePage,
		title: "Profile"
	
	},
];
