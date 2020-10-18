import React from 'react';
import { Link } from 'react-router-dom'
import useStyles from './style';
import Button from '@material-ui/core/Button';
import ContaineCentralized from 'components/reusable/containerCentralized';
import { logo } from 'utils/baseImages';

import {ShakeDiv1} from 'utils/transitions'

function LeftContainer(props) {
    const classStyle = useStyles();

    return (
        <ContaineCentralized>
            <div className={classStyle.divContainer}>
                <ShakeDiv1>
                <img src={logo} className={classStyle.imgLogo} />
                </ShakeDiv1>
                <p className={classStyle.msgTitle}>Bem-vindo ao sistema</p>
                <p className={classStyle.msg}>
                    Software System  sempre em busca de <br />
                    soluções inovadoras para velhos problemas!
                </p>
                <Link to='/signup'>
                    <Button color="secondary" variant="contained" className={classStyle.button} >
                        Cadastrar
                    </Button>
                </Link>
            </div>
        </ContaineCentralized>
    )
}

export default LeftContainer;