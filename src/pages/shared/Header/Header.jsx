import moment from 'moment';
import logo from '../../../assets/logo.png'
const Header = () => {
    return (
        <div className='text-center'>
           <img className='mx-auto'  src={logo} alt="Logo" />
           <p>Journalism Without Fear or Fever</p>
           <p className="text-xl">{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
        </div>
    );
};

export default Header;