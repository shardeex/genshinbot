import { useState } from "react";
import { type FC } from "react";

import { Tabbar } from "@telegram-apps/telegram-ui";

import { Icon28Chat } from '@telegram-apps/telegram-ui/dist/icons/28/chat';
import { Icon28Heart } from '@telegram-apps/telegram-ui/dist/icons/28/heart';
import { Icon28Devices } from '@telegram-apps/telegram-ui/dist/icons/28/devices';

import { Link } from "@/components/Link/Link.tsx";


const tabs = [
    {id: "index", text: "Home", Icon: Icon28Chat},
    {id: "profile", text: "Profile", Icon: Icon28Heart},
    {id: "shop", text: "Shop", Icon: Icon28Devices}
]

interface NavigationBarProps {currentTabId: string}

export const NavigationBar: FC<NavigationBarProps> = ({currentTabId}) => {
    
    const [currentTab, setCurrentTab] = useState(currentTabId);
    
    return <div style={{height: 80}}>
        <Tabbar>
            {tabs.map(({
                id, text, Icon
            }) => <Link to={id}><Tabbar.Item key={id} text={text} selected={id === currentTab} onClick={() => setCurrentTab(id)}>
                <Icon/>
            </Tabbar.Item></Link>)}
        </Tabbar>
    </div>
}
