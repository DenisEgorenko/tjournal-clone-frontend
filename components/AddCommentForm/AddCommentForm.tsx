import React, {ChangeEvent, useState} from 'react'
import {Button, Input} from '@material-ui/core';
import styles from './AddCommentForm.module.scss'


type AddCommentFormProps = {}

function AddCommentForm(props: AddCommentFormProps) {
    const [clicked, setClicked] = useState(false)
    const [value, setValue] = useState('')

    const onAddComment = () => {
        setClicked(false)
        setValue('')
    }

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }

    return (
        <div className={styles.form}>
            <Input value={value} onChange={onChangeHandler} onFocus={() => setClicked(true)} minRows={clicked ? 5 : 1}
                   classes={{root: styles.fieldRoot}} placeholder={'Написать комментарий...'} fullWidth multiline/>
            {clicked && <Button onClick={onAddComment} className={styles.addButton} style={{height: 42}} variant="contained" color="primary">
                Опубликовать
            </Button>}
        </div>
    )
}

export default AddCommentForm