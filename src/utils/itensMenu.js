import React from 'react';

import {
    BsPeople,
    BsGear,
    BsCalendar,
    BsBarChart,
    BsImages,
    BsBullseye,
} from "react-icons/bs";

const subIcon = <BsBullseye style={{ fontSize: '6px', marginBottom: '2px', marginRight: '10px' }} />;

export const itensMenu = [
    {
        id: 1,
        text: 'Contatos',
        icon: <BsPeople />,
        itens: [
            {
                id: 2,
                route: '/main/contactSearch',
                text: 'Pesquisa',
                icon: subIcon,
            },
            {
                id: 3,
                route: '/main/contactMaint',
                text: 'Manutenção',
                icon: subIcon,
            },
        ]
    },
    {
        id: 4,
        text: 'Menu 2',
        icon: <BsCalendar />,
        itens: [
            {
                id: 5,
                route: '/main/tela3',
                text: 'Submenu 3',
                icon: subIcon,
            },
            {
                id: 6,
                route: '/main/tela4',
                text: 'Submenu 4',
                icon: subIcon,
            },
            {
                id: 7,
                route: '/main/tela4',
                text: 'Submenu 4',
                icon: subIcon,
            },
            {
                id: 8,
                route: '/main/tela4',
                text: 'Submenu 4',
                icon: subIcon,
            },
            {
                id: 9,
                route: '/main/tela4',
                text: 'Submenu 4',
                icon: subIcon,
            },
            {
                id: 10,
                route: '/main/tela4',
                text: 'Submenu 4',
                icon: subIcon,
            },
            {
                id: 11,
                route: '/main/tela4',
                text: 'Submenu 4',
                icon: subIcon,
            },
        ]
    },
    {
        id: 12,
        text: 'Menu 3',
        icon: <BsBarChart />,
        itens: []
    },
    {
        id: 13,
        route: '/main/settings',
        text: 'Menu 4',
        icon: <BsImages />,
        itens: []
    },
    {
        id: 14,
        route: '/main/settings',
        text: 'Configurações',
        icon: <BsGear />,
        itens: []
    },
];