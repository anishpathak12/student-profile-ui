import './Styles/Footer.css';
import pic2 from './img/pic2.jpg';
import pic3 from './img/pic3.jpg';
import pic4 from './img/pic4.jpg';
import pic5 from './img/pic5.jpg';
import pic6 from './img/pic6.jpg';
import pic7 from './img/pic7.jpg';

function Footer() {
    return (
        <div className='Footer'>
            <h3>My Courses</h3>
        <div className='courses'>
            <div className='course-1'>
                <img src={pic3} alt="course-pic" height= "200px" width="300px"/>
                <h4>Essential Oracle SQL Developer 2021</h4>
                <div className='course-detail'>
                    <div className='course-detail-1'>
                        <p className='course-detail-highlight'>$480.99</p>
                        <p className='course-detail-highlight'>Deepika Sehda</p>
                    </div>
                    <div className='course-detail-2'>
                        <p>14-05-21</p>
                        <p>View More >></p>
                    </div>
                </div>
            </div>
            <div className='course-2'>
                <img src={pic4} alt="course-pic" height= "200px" width="300px"/>
                <h4>Learning Programing Language</h4>
                <div className='course-detail'>
                    <div className='course-detail-1'>
                        <p className='course-detail-highlight'>$70.99</p>
                        <p className='course-detail-highlight'>Jatin Mittal</p>
                    </div>
                    <div className='course-detail-2'>
                        <p>20-05-21</p>
                        <p>View More >></p>
                    </div>
                </div>
            </div>
            <div className='course-3'>
                <img src={pic5} alt="course-pic" height= "200px" width="300px"/>
                <h4>Global Master of Business Administration</h4>
                <div className='course-detail'>
                    <div className='course-detail-1'>
                        <p className='course-detail-highlight'>$825.99</p>
                        <p className='course-detail-highlight'>Kiran Lilpan</p>
                    </div>
                    <div className='course-detail-2'>
                        <p>10-06-21</p>
                        <p>View More >></p>
                    </div>
                </div>
            </div>
        </div>
        <h3>My Project</h3>
        <div className='projects'>
            <div className='project-1'>
                <img src={pic6} alt="course-pic" height= "200px" width="300px"/>
                <h4>Helvock App Design</h4>
                <p>Completed on 20-06-2021</p>
            </div>
            <div className='project-2'>
                <img src={pic7} alt="course-pic" height= "200px" width="300px"/>
                <h4>Yaalan Website Design</h4>
                <p>Completed on 29-06-2021</p>
            </div>
            <div className='project-3'>
                <img src={pic3} alt="course-pic" height= "200px" width="300px"/>
                <h4>Simper App Design</h4>
                <p>Completed on 20-06-2021</p>
            </div>
        </div>
        </div>
    );
}

export default Footer;