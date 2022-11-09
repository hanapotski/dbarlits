import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

interface MenuItemProps {
  title: string;
  price: string;
}
export default function MenuItem({ title, price }: MenuItemProps) {
  return (
    <Stack direction="row" spacing={2}>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography color="primary">{price}</Typography>
    </Stack>
  );
}
