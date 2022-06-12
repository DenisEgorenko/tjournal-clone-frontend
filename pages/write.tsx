import React from 'react'
import {TextField} from '@material-ui/core';
import {MainLayout} from '../layouts/MainLayout';
import WriteForm from '../components/WriteForm/WriteForm';

type WritePageProps = {

}

function WritePage (props: WritePageProps) {
    return(
        <MainLayout className='main-layout-white' hideComments hideMenu>
            <WriteForm/>
        </MainLayout>
    );
}

export default WritePage