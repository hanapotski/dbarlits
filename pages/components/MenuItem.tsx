import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

interface MenuItemProps {
  title: string;
  description: string;
  image: string;
  price: string;
}
export default function MenuItem({
  title,
  description,
  image,
  price,
}: MenuItemProps) {
  return (
    <Card sx={{ maxWidth: 380 }}>
      <CardMedia component="img" alt={title} image={image} />
      <CardContent>
        <Stack direction="row" spacing={2}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography color="primary">{price}</Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
