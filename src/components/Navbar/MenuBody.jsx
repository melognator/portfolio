import { faHome, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { MenuButton } from './Menu.styles'
import { Context } from '../../utils/Store'
import { scrollToTop } from '../../utils/scroll'

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
            label: theme !== 'dark' ? t("darkmode_label") : t("lightmode_label"),
            icon: faMoon,
            action: () => {changeTheme()}
        }
    ]

    return (
        <>
            {links.map(link =>
                <MenuButton onClick={link.action}>
                    <FontAwesomeIcon icon={link.icon} />
                    <span>{link.label}</span>
                </MenuButton>
            )}
        </>
    )
}

export default MenuBody