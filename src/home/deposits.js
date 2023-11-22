import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./title";

function preventDefault(event) {
  event.preventDefault();
}

export default function deposits() {
  return (
    <React.Fragment>
      <Title>Recent Achievements</Title>
      
      <Typography component="p" variant="h4">
      Nothing So Far 😊
      </Typography>
      
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Waiting For Achievements!
        </Link>
      </div>
    </React.Fragment>
  );
}
