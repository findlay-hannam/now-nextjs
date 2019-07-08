import { Component } from "react";
import Link from "next/link";
import Header from "../components/header";
import ContactForm from '../components/contactForm';
import GoogleMaps from '../components/googleMaps'

class Contact extends Component {
  render() {
    return (
      <main>
        <Header />
        <section>
          <ContactForm />
          <GoogleMaps />
        </section>
      </main>
    );
  }
}

export default Contact;