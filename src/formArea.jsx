import { FaBell, FaEnvelope, FaLock, FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';
import {Form} from './styles/form';

const FormArea = () => {
    return ( 
        <>
        <Form>
            <header>
                <h1>Welcome Back :)</h1>
                <p>To keep connected with us please login with your personal information by email address and password <FaBell id='bellIcon' /></p>
            </header>

            <div className="container">
                <form className='email'> 
                    <div>< FaEnvelope /></div>
                    <input type="email" id="email" placeholder='Email Address' required/>
                </form>
                <form className="password">
                    <div>< FaLock /></div>
                    <input type="password" id="password" placeholder='Password' required/>
                </form>

                <div className="rem_forg">
                    <div className="rem">
                        <input type='checkbox' className="checkbox" />
                        <p>Remember Me</p>
                    </div>
                    <div className="forg">
                        <p>Forget Password?</p>
                    </div>
                </div>

                <div className="logacct">
                    <button type="submit" id='login'>Login Now</button>
                    <button type="submit" id='create_acct'>Create Account</button>
                </div>

                <div className="options">
                    <p>or you can join with</p>
                    <div className="media_logins">
                        <div style={{background : '#ff3e30'}}>< FaGoogle /></div>
                        <div style={{background : '#3b5998'}}>< FaFacebook /></div>
                        <div style={{background : '#08a0e9'}}>< FaTwitter /></div>
                    </div>
                </div>
            </div>

        </Form>
        </>
     );
}
 
export default FormArea;