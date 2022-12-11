import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { MenuItem as MenuItemProps } from "../../types";

interface SimpleMenuSectionProps {
  menuItems: MenuItemProps[];
  title: string;
}
export default function SimpleMenuSection({
  title,
  menuItems,
}: SimpleMenuSectionProps) {
  return (
    <Stack spacing={3} alignItems="center">
      <Stack>
        <Typography variant="h2">{title}</Typography>
      </Stack>

      <div>
        {menuItems.map((item) => (
          <Stack
            key={item.id}
            direction="row"
            gap={4}
            justifyContent="space-between"
          >
            <Typography>{item.title}</Typography>
            <Typography color="primary">{item.price}</Typography>
          </Stack>
        ))}
      </div>
    </Stack>
  );
}
