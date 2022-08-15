import React from "react";
import styles from "./styles";
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
        <div className={`${styles.boxWidth}`}>
          stats business billing cardDeal Testimonials client cta footer
        </div>
      </div>
    </div>
  );
};

export default App;
