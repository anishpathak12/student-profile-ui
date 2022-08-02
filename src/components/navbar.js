import './Styles/Navbar.css';
import pic from './img/pic.jpg';

export default function Navbar(){

    return (
        <div className="Navbar">
            <ul>
                <li>Logo</li>
            </ul>
            <ul>
                <li>Home</li>
                <li>Jobs</li>
                <li>Companies</li>
                <li>FAQs</li>
                <li>Courses</li>
                <li className='nav-img'>
                    <img className='nav-megan' src={pic} width="40px" height="40px" />
                    Megan
                    <select></select>
                </li>
                <li>English
                    <select></select>
                </li>
            </ul>
        </div>
    );
}