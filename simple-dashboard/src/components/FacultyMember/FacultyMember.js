import React from 'react';
import './FacultyMember.css'

const FacultyMember = (props) => {
    console.log(props);
    const { name, address, img, Room, salary } = props.faculty;
    return (



        <div className='facultyMember '>




            <div>
                <img src={img} alt="" />
                <h3>Name:{name}</h3>
                <h3>room:{Room}</h3>
                <h3>salary:{salary}</h3>
                <p>Address;{address}</p>
                <button className='bg btn-primary' onClick={() => props.handleFaculty(props.faculty)}> add Member</button>
            </div>
        </div>










    );
};

export default FacultyMember;