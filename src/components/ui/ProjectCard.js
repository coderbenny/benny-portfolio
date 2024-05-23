import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProjectCard({ proj }) {
  const [isHovered, setIsHovered] = React.useState(false);

  // const handleViewSite = (link) => {
  //   window.open(link, "_blank", "noopener,noreferrer");
  // };

  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: 3,
        transition: "box-shadow 0.3s",
        "&:hover": {
          boxShadow: isHovered ? 5 : 8,
        },
        marginBottom: 2, // Adding margin bottom here
        paddingBottom: 1,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardMedia
        component="img"
        alt={proj.title}
        // height="140"
        className="w-full h-[200px] object-cover"
        image={proj.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {proj.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {proj.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          component="a"
          href={proj.live_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Link
        </Button>
        <Button size="small">More Details</Button>
      </CardActions>
    </Card>
  );
}
