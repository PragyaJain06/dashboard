import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

export default function CardComponent({ label, color }) {
  return (
    <div style={{}}>
      <Card
        style={{
          width: "12rem",
          backgroundColor: color,
        }}
      >
        <CardContent>
          <Typography variant="h5" component="h2">
            {label}
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
            Keep Motivated
          </Typography>
          <Typography variant="body2" component="p">
            Stay Happy
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Stay Safe.....</Button>
        </CardActions>
      </Card>
    </div>
  );
}
