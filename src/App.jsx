import React from "react";
import styles from "./styles";

import {
  NavBar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonial,
  Client,
  CTA,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>NavBar</div>
      </div>
      {/* Hero */}
      <div className={`bg-primary | ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>Hero</div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}></div>
      </div>
    </div>
  );
};

export default App;
