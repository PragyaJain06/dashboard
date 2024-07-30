import React from "react";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import CardActions from "@material-ui/core/CardActions";
import { Card,CardActions,CardContent,Typography,Button } from "@mui/material";

export default function CardComponent({label,color}) {
    
	return (
		<div style={{}}>
			<Card
				style={{
					width: 200,
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
