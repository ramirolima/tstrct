import React from 'react';
import ContainerSideBySide from '../../components/reusable/containerSideBySide';
import LeftContainer from '../../components/custom/login/leftContainer';
import RightContainer from '../../components/custom/login/rightContainer';

function Login() {
    return (
        <ContainerSideBySide
            left={<LeftContainer />}
            leftSizing={5}
            right={<RightContainer />}
            rightSizing={7}
        />
    )
}

export default Login;