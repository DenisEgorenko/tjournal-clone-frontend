import React from 'react'
import {TextField} from '@material-ui/core';
import {useFormContext} from 'react-hook-form';

type FormFieldProps = {
    name: string;
    label: string;
    isPassword?: boolean
}

function FormField (props: FormFieldProps) {

    const {register, formState} = useFormContext();

    return(
        <TextField
            type={props.isPassword && "password"}
            {...register(props.name)}
            name={props.name}
            className="mb-20"
            size="small"
            label={props.label}
            variant="outlined"
            error={!!formState.errors[props.name]?.message}
            helperText={formState.errors[props.name]?.message}
            fullWidth
        />
    )
}

export default FormField