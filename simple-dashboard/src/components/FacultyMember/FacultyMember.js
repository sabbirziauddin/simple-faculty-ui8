import React from 'react';
import './FacultyMember.css'

const FacultyMember = (props) => {
    console.log(props);
    const { name, address, img, Room, salary } = props.faculty;



    return (
        <div>
            <div className='facultyMember '>

                <div>
                    <img src={img} alt="" />
                </div>
                <div >
                    <h3>Name:{name}</h3>
                    <h3>room:{Room}</h3>
                    <h3>salary:{salary}</h3>
                    <p>Address:{address}</p>
                </div>





            </div>
            <button className='bg btn-primary' onClick={() => props.handleFaculty(props.faculty)}> add Member</button>


        </div>










    );
};

export default FacultyMember;