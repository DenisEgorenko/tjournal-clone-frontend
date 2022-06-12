import React from 'react'
import {Button, Input} from '@material-ui/core';
import styles from './WrieForm.module.scss'
import dynamic from 'next/dynamic';
import {TextsmsOutlined as MessageIcon} from '@material-ui/icons';


const Editor = dynamic(() => import('../Editor').then(Editor), {ssr: false})

type WriteFormProps = {
    title?: string,
}

function WriteForm(props: WriteFormProps) {

    return (
        <div style={{backgroundColor: '#fff'}}>
            <Input classes={{root: styles.titleField}} placeholder={'Заголовок'} defaultValue={props.title}/>
            <div className={styles.editor}>
                <Editor/>
            </div>
            <Button style={{ height: 42 }} variant="contained" color="primary">
                Опубликовать
            </Button>
        </div>
    )
}

export default WriteForm