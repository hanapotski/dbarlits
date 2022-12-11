import { Alert, Box, Divider, Stack, Typography } from "@mui/material";
import {
  ALL_DAY,
  COFFEE,
  EXTRAS,
  LIGHT_EATS,
  MAIN_EATS,
  NONCOFFEE,
  PASTA,
  SANDWICHES,
  SIDES,
} from "../menuItems";
import DessertSection from "./components/DessertSection";
import DrinkSection from "./components/DrinkSection";
import MenuSection from "./components/MenuSection";
import SimpleMenuSection from "./components/SimpleMenuSection";
// import ScrollToTop from "./components/ScrollToTop";

export default function Menu() {
  return (
    <Box>
      {/* <ScrollToTop /> */}
      <Stack spacing={4}>
        <MenuSection title="Light Eats" menuItems={LIGHT_EATS} />
        <Divider />
        <MenuSection title="All Day Breakfast" menuItems={ALL_DAY} />
        <Divider />
        <MenuSection title="Main Eats" menuItems={MAIN_EATS} />
        <Divider />
        <MenuSection
          title="Sandwiches"
          menuItems={SANDWICHES}
          description="With freshly baked buns/bread, served with fries"
        />
        <Divider />
        <MenuSection title="Pasta" menuItems={PASTA} />
        <Divider />
        <SimpleMenuSection title="Sides/Extras" menuItems={SIDES} />

        <Alert severity="info" icon={false}>
          WE COOK YOUR ORDERS AS WE RECEIVE THEM. KINDLY GIVE US 20-30 MINUTES
          TO PREPARE YOUR MEAL.
        </Alert>

        <Divider />
        <DessertSection />

        <Divider />
        <Stack spacing={3} alignItems="center">
          <Typography variant="h2">Drinks</Typography>
          <DrinkSection
            title="Coffee"
            description="Please tell our barista your preference. Double Shot (Strong) or Single Shot (Mild)"
            drinkItems={COFFEE}
          />
          <DrinkSection title="Non-Coffee" drinkItems={NONCOFFEE} />
          <SimpleMenuSection title="Extras" menuItems={EXTRAS} />
        </Stack>
      </Stack>
    </Box>
  );
}
