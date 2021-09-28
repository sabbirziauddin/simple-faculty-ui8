import React from 'react';

const Cart = (props) => {
    console.log(props)
    const { cart } = props;
    let total = 0;
    let name = '';
    for (const member of cart) {
        console.log(member);
        total = total + member.salary;
    }
    return (
        <div>
            <h3>order summery :{props.cart.length}</h3>
            <h3>total :{total}</h3>
            <ul>
                
                {
                    cart.map(mem => <li> {mem.name}</li>)
                }
            </ul>


        </div>
    );
};

export default Cart;