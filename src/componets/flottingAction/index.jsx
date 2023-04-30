import React from "react";
import {
  Container,
  Button,
} from "react-floating-action-button";

import Fab from "@mui/material/Fab";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const flottingAction = () => {
  return (
    <Container className="z-100">
     
      <Button
        onClick={() => {
          let url = `https://web.whatsapp.com/send?phone=+971 0555621879`;
          url += `&text=${encodeURI(
            "Hey, I need a consultation"
          )}&app_absent=0`;
          window.open(url); 
        }}
      >
        <Fab color="primary" aria-label="add" size='large'>
          <WhatsAppIcon />
        </Fab>
      </Button>
    </Container>
  );
};
export default flottingAction;
