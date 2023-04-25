import React from 'react';
import { AiFillEye } from 'react-icons/ai'

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
                <input type="email" class="form-control" placeholder="email" aria-label="" />
                <div className="input-group">
                    <div className="inner-addon left-addon w-100">
                        <input type={toggle ? 'text' : 'password'} class="form-control" placeholder="password" aria-label="" />
                        <AiFillEye onClick={() => setToggle(prev => !prev)} cursor={'pointer'} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CreateAccount