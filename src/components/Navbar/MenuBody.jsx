import { faCode, faHome, faMoon, faPaperPlane, faUser, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { MenuButton } from './Menu.styles'
import { Context } from '../../utils/Store'
import { scrollToId, scrollToTop } from '../../utils/scroll'

const MenuBody = ({toggleExpanded}) => {

    const { t } = useTranslation()
    
    const [theme, changeTheme] = useContext(Context)

    const links = [
        {
            label: t("home_label"),
            icon: faHome,
            action: () => {
                scrollToTop()
                toggleExpanded()
            }
        },
        {
            label: t("skills_label"),
            icon: faWandMagicSparkles,
            action: () => {
                scrollToId('skills')
                toggleExpanded()
            }
        },
        {
            label: t("projects_label"),
            icon: faCode,
            action: () => {
                scrollToId('projects')
                toggleExpanded()
            }
        },
        {
            label: t("about_label"),
            icon: faUser,
            action: () => {
                scrollToId('about')
                toggleExpanded()
            }
        },
        {
            label: t("contact_label"),
            icon: faPaperPlane,
            action: () => {
                scrollToId('contact')
                toggleExpanded()
            }
        },
        {
            label: theme !== 'dark' ? t("darkmode_label") : t("lightmode_label"),
            icon: faMoon,
            action: () => {changeTheme()}
        }
    ]

    return (
        <>
            {links.map(link =>
                <MenuButton key={link.label} onClick={link.action}>
                    <FontAwesomeIcon icon={link.icon} />
                    <span>{link.label}</span>
                </MenuButton>
            )}
        </>
    )
}

export default MenuBody