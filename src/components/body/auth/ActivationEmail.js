import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { showErrMsg, showSuccessMsg } from '../../utils/notifications/Notifications'

function ActivationEmail() {
    const {activationToken} = useParams();
    const [err, setErr] = React.useState('');
    const [success, setSuccess] = React.useState('')
    
    React.useEffect(() => {
        if(activationToken){
            const activationEmail = async() => {
                try {
                    const res = await axios.post('/user/activation', {activationToken})
                    setSuccess(res.data.msg)
                } catch (error) {
                    error.response.data.msg && setErr(error.response.data.msg)
                }
            }
            activationEmail();
        }
    }, [activationToken])

    return (
        <div>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
        </div>
    )
}

export default ActivationEmail
