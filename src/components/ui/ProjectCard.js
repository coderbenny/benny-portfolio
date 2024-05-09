import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProjectCard() {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: 3,
        transition: "box-shadow 0.3s",
        "&:hover": {
          boxShadow: isHovered ? 5 : 8,
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardMedia
        component="img"
        alt="project"
        // height="140"
        className="w-full h-[150px]"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Maleek Visuals
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Live Link</Button>
        <Button size="small">More Details</Button>
      </CardActions>
    </Card>
  );
}
