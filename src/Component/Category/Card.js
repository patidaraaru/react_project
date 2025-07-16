import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CategoryData from "../Data/CategoryData";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const CustomCard = () => {
  return (
    <>
      <Grid container spacing={2}>
        {CategoryData.map((item, key) => (
          <Link to={item.link}>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: '370px' }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.img}
                    alt={item.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {item.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Link>
        ))}
      </Grid>
      
    </>
  );
};

export default CustomCard;
