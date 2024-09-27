import { useInitData } from "@telegram-apps/sdk-react";

import { List, Card, Section, Badge, InlineButtons, Snackbar, Modal, Placeholder, Button, Progress, Avatar } from "@telegram-apps/telegram-ui";
import { useState } from "react";
import type { FC } from "react";

import { NavigationBar } from "@/components/NavigationBar.tsx";

import "./ProfilePage.css"
import { Icon28Edit } from "@telegram-apps/telegram-ui/dist/icons/28/edit";


export const ProfilePage: FC = () => {

	const initData = useInitData();
    const pity_four = 3
    const pity_five = 73

    const [snackbarOpen, setSnackbarOpen] = useState(false)

	return (
        <>
        { snackbarOpen && <Snackbar
            className="profile-page__snackbar"
            onClose={() => setSnackbarOpen(false)}
            duration={5000}
            after={<Snackbar.Button onClick={function noRefCheck(){}}>View</Snackbar.Button>}
            before={<img src="https://gi.yatta.moe/assets/UI/achievement/UI_AchievementIcon_A003.png" style={{height: "12vw"}}/>}
            description="Achievement unlocked!"
        >Early supporter
        </Snackbar> }
        <List className="profile-page__list">
            <Card type="ambient" className="index-page__card" style={{margin: "2%"}}>
                <img
                    className="profile-page__card-img"
                    alt="Profile card in ambient"
                    src="https://gi.yatta.moe/assets/UI/namecard/UI_NameCardPic_Klee_P.png"
                />
                <Card.Cell
                    before={<Avatar src="https://gi.yatta.moe/assets/UI/UI_AvatarIcon_PlayerGirl.png" size={48}/>}
                    after={<Button onClick={function noRefCheck(){}}><Icon28Edit /></Button>}
                    subtitle="Вставьте текст"
                    titleBadge={<Badge type="number">99</Badge>}
                >
                    {initData?.user?.firstName} {initData?.user?.lastName}
                </Card.Cell>
            </Card>
            <Section
                className="profile-page__section"
                header="Стенд персонажей"
                footer="Здесь ты можешь выставлять тех персонажей, которых хочешь показать всем-всем-всем!"
            >
                <div>
                <InlineButtons mode="bezeled" className="profile-page__character-icon-box">
                    <InlineButtons.Item className="profile-page__character-icon profile-page__character-icon-five" text="Кли" onClick={() => setSnackbarOpen(true)}>
                        <img src="https://gi.yatta.moe/assets/UI/UI_AvatarIcon_Klee.png" />
                    </InlineButtons.Item>
                    <InlineButtons.Item className="profile-page__character-icon profile-page__character-icon-five" text="Гань Юй" onClick={() => setSnackbarOpen(true)}>
                        <img src="https://gi.yatta.moe/assets/UI/UI_AvatarIcon_Ganyu.png" />
                    </InlineButtons.Item>
                    <InlineButtons.Item className="profile-page__character-icon profile-page__character-icon-four" text="Лиза" onClick={() => setSnackbarOpen(true)}>
                        <img src="https://gi.yatta.moe/assets/UI/UI_AvatarIcon_Lisa.png" />
                    </InlineButtons.Item>
                    <InlineButtons.Item className="profile-page__character-icon profile-page__character-icon-five" text="Элой" onClick={() => setSnackbarOpen(true)}>
                        <img src="https://gi.yatta.moe/assets/UI/UI_AvatarIcon_Aloy.png" />
                    </InlineButtons.Item>
                    <InlineButtons.Item className="profile-page__character-icon profile-page__character-icon-five" text="Муалани" onClick={() => setSnackbarOpen(true)}>
                        <img src="https://gi.yatta.moe/assets/UI/UI_AvatarIcon_Mualani.png" />
                    </InlineButtons.Item>
                    <InlineButtons.Item className="profile-page__character-icon profile-page__character-icon-four" text="Сахароза" onClick={() => setSnackbarOpen(true)}>
                        <img src="https://gi.yatta.moe/assets/UI/UI_AvatarIcon_Sucrose.png" />
                    </InlineButtons.Item>
                    <InlineButtons.Item className="profile-page__character-icon profile-page__character-icon-four" text="Фишль" onClick={() => setSnackbarOpen(true)}>
                        <img src="https://gi.yatta.moe/assets/UI/UI_AvatarIcon_Fischl.png" />
                    </InlineButtons.Item>
                    <InlineButtons.Item className="profile-page__character-icon profile-page__character-icon-five" text="Чжун Ли" onClick={() => setSnackbarOpen(true)}>
                        <img src="https://gi.yatta.moe/assets/UI/UI_AvatarIcon_Zhongli.png" />
                    </InlineButtons.Item>
                </InlineButtons>
                </div>
            </Section>
            <Section
                className="profile-page__section"
                header="Счётчик молитв"
                footer="С помощью счётчика молитв легко понять, когда будет что-нибудь интересненькое!"
            >
                <InlineButtons mode="bezeled" style={{padding: "2%"}}>
                    <Modal
                        header={<Modal.Header>Only iOS header</Modal.Header>}
                        trigger={
                            <InlineButtons.Item text="Lifetime Pulls">
                                <Badge type="number" mode="primary" large>8722</Badge>
                            </InlineButtons.Item>
                        }
                        >
                        <Placeholder
                            description="Description"
                            header="Title"
                        >
                            <img
                            alt="Primogem"
                            src="https://gi.yatta.moe/assets/UI/UI_ItemIcon_201.png"
                            style={{
                                display: 'block',
                                width: '25vw',
                            }}
                            />
                        </Placeholder>
                    </Modal>
                    <Modal
                        header={<Modal.Header>Only iOS header</Modal.Header>}
                        trigger={
                            <InlineButtons.Item text="5★ Pity">
                                <Badge type="number" mode="primary" large>{ pity_five }</Badge>
                            </InlineButtons.Item>
                        }
                        >
                        <Placeholder
                            header="5★ drop guarantee"
                            description={<>Shows your current 5★ pity. {90 - pity_five} more pulls to guaranteed 5★</>}
                        >
                            <img
                            alt="Interwined Fate"
                            src="https://gi.yatta.moe/assets/UI/UI_ItemIcon_223.png"
                            style={{
                                display: 'block',
                                width: '50vw',
                            }}
                            />
                        </Placeholder>
                        <List className="profile-page__modal-pity">
                            <Badge large type="number" mode="primary">{ pity_five }</Badge>
                            <div
                                style={{
                                    padding: '2%',
                                    width: '60vw'
                                }}
                                >
                            <Progress value={ pity_five / 90 * 100 } />
                            </div>
                            <Badge large type="number" mode="primary">90</Badge>
                        </List>
                    </Modal>
                    <Modal
                        header={<Modal.Header>Only iOS header</Modal.Header>}
                        trigger={
                            <InlineButtons.Item text="4★ Pity">
                                <Badge type="number" mode="primary" large>{ pity_four }</Badge>
                            </InlineButtons.Item>
                        }
                        >
                        <Placeholder
                            header="4★ drop guarantee"
                            description={<>Shows your current 4★ pity. {10 - pity_four} more pulls to guaranteed 4★</>}
                        >
                            <img
                            alt="Interwined Fate"
                            src="https://gi.yatta.moe/assets/UI/UI_ItemIcon_224.png"
                            style={{
                                display: 'block',
                                width: '50vw',
                            }}
                            />
                        </Placeholder>
                        <List className="profile-page__modal-pity">
                            <Badge large type="number" mode="primary">{ pity_four }</Badge>
                            <div
                                style={{
                                    padding: '2%',
                                    width: '60vw'
                                }}
                                >
                            <Progress value={ pity_four / 10 * 100 } />
                            </div>
                            <Badge large type="number" mode="primary">10</Badge>
                        </List>
                    </Modal>
                </InlineButtons>
            </Section>
        </List>
        <br/>
        <NavigationBar currentTabId="profile"/>
        </>
	);
};
