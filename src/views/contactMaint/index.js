import React from 'react';
import TempalteMaint from 'components/reusable/templateMaint/index';
import tabItens from './tabs/tabList';
import { BsPeople } from 'react-icons/bs';

function ContactMaint() {
    return (
        <TempalteMaint
            tabs={tabItens}
            title='Contatos'
            icon={<BsPeople />}
        />
    )
}

export default ContactMaint;