import React from 'react';
import { Button } from 'react-bootstrap';
import { AiFillEye } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc'


const CreateAccount = () => {
    const [toggle, setToggle] = React.useState(() => false)
    return (
        <div className='w-50'>
            <div>
                <h3>Create Account</h3>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder='First name' />
                    <input type="text" className="form-control" placeholder='Last name' />
                </div>
                <input type="email" className="form-control" placeholder="email" aria-label="" />
                <div className="inner-addon input-group left-addon w-100 position-relative">
                    <input type={toggle ? 'text' : 'password'} className="form-control rounded" placeholder="password" aria-label="" />
                    <AiFillEye onClick={() => setToggle(prev => !prev)} cursor={'pointer'}
                        className='position-absolute top-50 end-0 translate-middle z-index-3' />
                </div>
                <input type={'password'} className="form-control w-100" placeholder="confirm password" aria-label="" />
                <Button className='mt-5 w-100 rounded-pill'>Create Account</Button>
                <div className="input-group" style={{ marginTop: '10px' }}>
                    <Button variant='none' className="form-control w-100 rounded border" >
                        <BsFacebook className='me-2' />
                        Sign Up with Facebook
                    </Button>
                    <Button variant='none' className="form-control w-100 rounded border mt-2" >
                        <FcGoogle className='me-2' />
                        Sign Up with Google
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount