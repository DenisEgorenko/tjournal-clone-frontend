import React from 'react'
import {Button, TextField, Typography} from '@material-ui/core';
import styles from '../AuthDialog.module.scss';
import {useForm, FormProvider} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {RegisterFormSchema} from '../../../Utils/Validations';
import FormField from '../../FormField';

type RegisterFormProps = {
    setAuthType: ()=>void;
}

function RegisterForm (props: RegisterFormProps) {

    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(RegisterFormSchema)
    })

    const onSubmit = (data) => console.log(data);

    return(
        <div>
            <Typography className={styles.title}>
                <h3>Зарегистрироваться</h3>
            </Typography>

            <FormProvider {...form}>
                <FormField name={'fullname'} label={'Имя и Фамилия'}/>
                <FormField name={'email'} label={'Почта'}/>
                <FormField isPassword name={'password'} label={'Пароль'}/>

                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="d-flex align-center justify-between">
                        <Button disabled={!form.formState.isValid} type={'submit'} color="primary" variant="contained">
                            Зарегистрироваться
                        </Button>
                        <Button onClick={props.setAuthType} color="primary" variant="text">
                            Войти
                        </Button>
                    </div>
                </form>

            </FormProvider>
        </div>
    )
}

export default RegisterForm