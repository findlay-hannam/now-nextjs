import { Component } from "react";
import Link from "next/link";
import Header from "../components/header";
import Service from '../components/service';

import servicesText from '../resources/services.json';

class Services extends Component {
  render() {
    return (
      <main>
        <Header />
        <section>
          <ul>
            {servicesText.map(Service)}
          </ul>
        </section>
      </main>
    );
  }
}

export default Services;