import React from "react";
import { Card,CardActions,CardContent,Typography } from "@mui/material";


export default function CardComponent({label,color,data,dayWiseDatas}) {

	return (
		<div style={{}}>
			<Card
				style={{
					width: "12rem",
					backgroundColor: color,
                    padding:"2px",
                    margin:"5px"
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
						{data && data?.map((item)=>{
                            if(item?.name===label){
                                return <h2 key={item.value}>{item.value}</h2>
                            }
                        })}
						{dayWiseDatas && dayWiseDatas?.map((item)=>{
							if(item?.label===label){
							return <h2 key={item.label}>{item.count}</h2>
							}
						})}
					</Typography>
					
				</CardContent>
				<CardActions>
					
				</CardActions>
			</Card>
		</div>
	);
}
