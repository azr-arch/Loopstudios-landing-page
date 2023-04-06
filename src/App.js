import { React, useState } from "react";
import Content from "./components/Content";
import Creation from "./components/Creation";

import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
  const [mobilNavOn, setMobilNavOn] = useState(false);

  return (
    <>
      <Hero
        mobileNav={mobilNavOn}
        handleClick={() => setMobilNavOn((prevState) => !prevState)}
      />
      <Content />
      <Creation />
      <Footer />
    </>
  );
};

export default App;
