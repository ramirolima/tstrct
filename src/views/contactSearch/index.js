import React from 'react';
import TempalteSearch from 'components/reusable/templateSearch';
import tabItens from './tabs/tabList';

function ContactMaint() {
    return (
        <TempalteSearch
        tabs={tabItens}
        title='Serach'
        icon='ic-bubbles' 
         />
    )
}

export default ContactMaint;