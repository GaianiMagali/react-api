import React from 'react';
import ContactItem from './ContactItem'

const Contacts = ({ contacts }) => {
    return (
        <div>
            <center><h1>Contact List</h1></center>
            {contacts.map((contact, i) => (
                <ContactItem contact={contact} key={i} />
            ))}
        </div>
    )
}

export default Contacts;