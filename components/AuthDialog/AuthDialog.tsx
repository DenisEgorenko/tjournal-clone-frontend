import React, {useState} from 'react'
import {Button, Dialog, DialogContent, DialogContentText, Divider, TextField, Typography} from '@material-ui/core';
import styles from './AuthDialog.module.scss'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import MainForm from './Forms/Main';
import LoginForm from './Forms/Login';
import RegisterForm from './Forms/Register';

type AuthDialogProps = {
    open: boolean;
    handleClose: () => void;
}

function AuthDialog(props: AuthDialogProps) {

    const [authType, setAuthType] = useState<'main' | 'login' | 'register'>('main')

    return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="responsive-dialog-title"
            maxWidth={'xs'}
            fullWidth
        >
            <DialogContent>
                <DialogContentText>
                    <div className={styles.content}>
                        <Typography className={styles.title}>
                            {authType === 'main' ? 'Вход в TJ' : (
                                <p onClick={() => setAuthType('main')} className={styles.backTitle}><ArrowBackIcon/>К авторизации</p>)}
                        </Typography>

                        {authType === 'main' && <MainForm setAuthType={() => setAuthType('login')}/>}

                        {authType === 'login' && <LoginForm setAuthType={() => setAuthType('register')}/>}

                        {authType === 'register' && <RegisterForm setAuthType={() => setAuthType('login')}/>}

                    </div>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}

export default AuthDialog