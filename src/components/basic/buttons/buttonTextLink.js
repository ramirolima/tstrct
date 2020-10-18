import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

function ButtonTextLink(props) {
    return (
        <Link to={props.link}>
            <Button color={props.colorTheme} style={{ backgroundColor: 'transparent' }}>
                {props.text}
            </Button>
        </Link>
    )
}

ButtonTextLink.defaultProps = {
    colorTheme: 'primary',
    text: 'link',
};

export default ButtonTextLink;