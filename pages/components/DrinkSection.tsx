import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import { DrinkItem as DrinkItemProps } from "../../types";
import DrinkItem from "./DrinkItem";

interface DrinkSectionProps {
  drinkItems: DrinkItemProps[];
  title: string;
  subtitle?: string;
}
export default function DrinkSection({
  title,
  subtitle,
  drinkItems,
}: DrinkSectionProps) {
  return (
    <Stack spacing={3} alignItems="center">
      <Stack direction="row">
        <Typography variant="h3" fontWeight="bold">
          {title}
        </Typography>
        {subtitle && <Chip label={subtitle} color="primary" size="small" />}
      </Stack>
      <Grid container justifyContent="center" gap={1}>
        {drinkItems.map((item) => (
          <Grid key={item.id} xs={12} md={4} item={true}>
            <DrinkItem {...item} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
