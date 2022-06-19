import React from 'react'
import {Button, TextField, Typography} from '@material-ui/core';
import styles from '../AuthDialog.module.scss';
import {useForm, FormProvider} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {LoginFormSchema} from '../../../Utils/Validations';
import FormField from '../../FormField';


type LoginFormProps = {
    setAuthType: () => void;
}

function LoginForm(props: LoginFormProps) {

    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(LoginFormSchema)
    })

    const onSubmit = (data) => console.log(data);
    console.log(form.formState.errors)

    return (
        <div>
            <Typography className={styles.title}>
                <h3>Войти в TJ</h3>
            </Typography>

            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>

                    <FormField name={'email'} label={'Почта'}/>
                    <FormField isPassword name={'password'} label={'Пароль'}/>

                    <div className="d-flex align-center justify-between">
                        <Button
                            disabled={!form.formState.isValid}
                            color="primary"
                            variant="contained"
                            type={'submit'}
                        >
                            Войти
                        </Button>
                        <Button onClick={props.setAuthType} color="primary" variant="text">
                            Регистрация
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}

export default LoginForm