import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'

import './FacultyMember.css'

const FacultyMember = (props) => {
    console.log(props);
    const { name, address, img, Room, salary } = props.faculty;

    const element = <FontAwesomeIcon icon={faUser} />;

    return (
        <div className='facultyCart'>
            <img src={img} alt="" />

            <div >
                <h3>Name:{name}</h3>
                <h3>room:{Room}</h3>
                <h3>salary:{salary}$</h3>
                <h4>Address:{address}</h4>
            </div>






            <button className='btn btn-primary' onClick={() => props.handleFaculty(props.faculty)}>{element} add Member</button>


        </div>










    );
};

export default FacultyMember;