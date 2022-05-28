import React from 'react'
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

export const showErrMsg = (msg) => {
    return <div className='bg-danger text-light p-1 mt-3 mb-3 text-center'>{msg}</div>
}

export const showSuccessMsg = (msg) => {
    return <div className='bg-success text-light p-1 mt-3 mb-3 text-center'>{msg}</div>
}

export const successMsg = (msg, name) => {
    return(
        <>
            {/* <Alert onClose={() => {}}></Alert> */}
            <div class="alert alert-success alert-dismissible fade show" role="alert" >
                {msg}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </>
    )
}