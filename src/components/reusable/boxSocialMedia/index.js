import React from 'react';
import useStyles from './style';
import Link from '@material-ui/core/Link';
import { iconFacebook, 
         iconGoogle,
         iconLinkedin } from 'utils/baseImages';

function BoxSocialMedia(props) {  
    const classes = useStyles();
    return (
        <div>
            {props.facebook &&
                <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                        alert("Entrar com Facebook.");
                    }}
                >
                <img src={iconFacebook} className={classes.icon}/>
                </Link>
            }  
            {props.google &&          
                <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                        alert("Entrar com conta Google.");
                    }}
                >
                    <img src={iconGoogle} className={classes.icon}/>
                </Link>
            }
            {props.linkedin &&
                <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                        alert("Entrar com Linkedin.");
                    }}
                >
                <img src={iconLinkedin} className={classes.icon}/>
                </Link>
            }
        </div>                
    )
}

BoxSocialMedia.defaultProps = {
    facebook: true,
    google: true,
    linkedin: true,
  };

export default BoxSocialMedia;