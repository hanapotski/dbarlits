import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { MenuItem as MenuItemProps } from "../../types";
import MenuItem from "./MenuItem";

interface MenuSectionProps {
  menuItems: MenuItemProps[];
  title: string;
}
export default function MenuSection({ title, menuItems }: MenuSectionProps) {
  return (
    <Stack spacing={3} alignItems="center">
      <Typography variant="h2">{title}</Typography>
      <Grid container justifyContent="center" gap={3}>
        {menuItems.map((item) => (
          <Grid key={item.id} xs={12} md={4} item={true}>
            <MenuItem {...item} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
