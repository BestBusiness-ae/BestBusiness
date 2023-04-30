import React from "react";
import Footer from "../../layouts/partials/footer/index";
import Header from "../../layouts/partials/header/Header2";
import Banner4 from "../../componets/banner/Index4";
import Banner2 from "../../componets/banner/Index2";
import WhatWeDoPart from "../../componets/whatWeDoPart/Index";
import ContactUs from "../../componets/contactUs/Index";
import Action2Part from "../../componets/action2Part/Index";



class Index2 extends React.Component {
  render() {
    return (
      <>
        <Header />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Banner4 />
        <WhatWeDoPart />        
        <Action2Part />
        <ContactUs />
        <Footer />
      </>
    );
  }
}

export default Index2;
