import React from 'react';
import { Link } from 'react-router-dom'
import useStyles from './style';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ContainerCentralized from 'components/reusable/containerCentralized';
import BoxSocialMedia from 'components/reusable/boxSocialMedia';
import ButtonTextLink from 'components/basic/buttons/buttonTextLink';

function RightContainer(props) {
    const classes = useStyles();

    return (
        <ContainerCentralized>
            <div className={classes.divContainer}>
                <p className={classes.msgTitleAccount}>Acesse com a sua conta</p>
                <BoxSocialMedia />
                <p className={classes.msgDecision}>ou utilize seu e-mail e senha.</p>
                <div className={classes.divForm}>
                    <TextField
                        label="Usuário"
                        variant="outlined"
                        margin="normal"
                        className={classes.textField}
                    />
                    <TextField
                        label="Senha"
                        variant="outlined"
                        margin="normal"
                        type="password"
                        className={classes.textField}
                    />
                    <Link to='/main'>
                        <Button color="secondary" variant="contained" className={classes.button}>
                            Entrar
                        </Button>
                    </Link>
                </div>
                <ButtonTextLink
                    text='Esqueci minha senha!'
                    link='/passRecovery'
                    colorTheme='secondary'
                />

            </div>
        </ContainerCentralized>
    )
}

export default RightContainer;