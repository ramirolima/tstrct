import React from 'react';
import TabPersonalData from 'components/custom/contacts/maintenance/tabs/personalData'


const tabItens =
    [
        {
            index: 0,
            label:  'Dados pessoais',
            panel: <TabPersonalData/>
        },
        {
            index: 1,
            label:  'Atividades',
            panel: <div>Tela 2
                Tela 2Tela 2

                Tela 2Tela 2

                Tela 2Tela 2

                Tela 2Tela 2

                Tela 2Tela 2

                Tela 2Tela 2

                Tela 2Tela 2



            </div>
        },
        {
            index: 2,
            label: 'Contatos',
            panel: <div>Tela 3</div>
        },
    ]

export default tabItens;