import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

interface MenuItemProps {
  title: string;
  description?: string;
  image?: string;
  price: string;
  options?: { option: string; price: string }[];
}
export default function MenuItem({
  title,
  description,
  image,
  price,
  options,
}: MenuItemProps) {
  return (
    <Card sx={{ maxWidth: 380 }}>
      {image && <CardMedia component="img" alt={title} image={image} />}
      <CardContent>
        <Stack direction="row" spacing={2}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography color="primary">{price}</Typography>
        </Stack>
        <Typography variant="body2">{description}</Typography>
        {options && (
          <Box p={1}>
            {options.map(({ option, price }, i) => (
              <Stack
                key={`option-${i}`}
                direction="row"
                gap={4}
                pl={2}
                justifyContent="space-between"
              >
                <Typography variant="body2">{option}</Typography>
                <Typography color="primary">{price}</Typography>
              </Stack>
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
