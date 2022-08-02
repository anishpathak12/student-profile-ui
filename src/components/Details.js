import './Styles/Details.css'   //rsf

function Details() {
    return (
        <div className='Details'>
            <div className='contact'>
                <div className='heading'>
                    <h4>Contact Details</h4>
                    <button>Edit</button>
                </div>
                <input className='corner-input' type="text" value="Meghan Hendew" />
                <div className='inputs'>
                    <input className='middle-input' type="text" value="Meghan288@emailhere.com" />
                    <input className='middle-input' type="number" placeholder="Phone" />
                </div>
                <div className='inputs-2'>
                    <select className='middle-input'>
                        <option>Female</option>
                        <option>Male</option>
                    </select>
                    <input className='middle-input' type="calander" placeholder="Date of Birth:" />
                </div>
                <input className='corner-input' type="text" placeholder="Sector of Activity" />
            </div>
            <div className='address'>
                <div className='heading'>
                    <h4>Address Details</h4>
                    <button>Edit</button>
                </div>
                <input className='corner-input' type="text" value="1st Block, Rammurthy Nagar" />
                <div className='inputs'>
                    <select className='middle-input'>
                        <option>India</option>
                        <option>U.S.</option>
                    </select>
                    <select className='middle-input'>
                        <option>Bangalore</option>
                        <option>Pune</option>
                    </select>
                </div>
                <div className='inputs-2'>
                    <select className='middle-input'>
                        <option>Karnataka</option>
                        <option>Maharashtra</option>
                    </select>
                    <input className='middle-input' type="number" value= {560016} />
                </div>
                <input className='corner-input' type="text" placeholder="Resume/Other Documents" />
                
            </div>
            
        </div>
    );
}

export default Details;