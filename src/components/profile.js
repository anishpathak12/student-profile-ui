import './Styles/Profile.css';
import pic from './img/pic.jpg';

export default function Profile(){
    return(
        <div className='Profile'>
            <div className="profile-pic">
                <h3>Student Profile</h3>
                <img className='megan' src= {pic} alt='megan' width= "100px" height= "100px"/>
                <h3>Megan Hendew</h3>
                <p>Graphic Designer</p>
            </div>
            <p className='para'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam consectetur eu maecenas nisl a faucibus 
            odio at urna. A at cursus dictum id. Massa sit mattis diam fringilla donec lobortis iaculis. Duis id
            et donec ut est ut amet elit enim. Ac auctor ultrices tortor, ac aliquam diam a lorem amet. Duis
            pellentesque habitant diam posuere mattis turpis. Arcu cras tellus aliquam orci morbi sollicitudin. 
            Eu senectus quam rhoncus nisl tincidunt adipiscing duis et habitant. Nisl, ornare enim eros,
            adipiscing gravida turpis proin enim, pharetra.
            </p>
        </div>
    );
}