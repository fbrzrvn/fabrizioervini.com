import React from 'react';
import Footer from '../components/Footer';
import Form from '../components/Form';
import { Nav, NavContainer, NavLogo } from '../components/Navbar/styles';

const ContactPage = () => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/">faber</NavLogo>
        </NavContainer>
      </Nav>
      <Form />
      <Footer />
    </>
  );
};

export default ContactPage;
