import { Box, Divider, Stack, Typography } from "@mui/material";
import { ALL_DAY, DRINKS, LIGHT_EATS, MAIN_EATS, PASTA } from "../menuItems";
import DrinkSection from "./components/DrinkSection";
import MenuSection from "./components/MenuSection";

export default function Menu() {
  return (
    <Box>
      <Stack spacing={8}>
        <MenuSection title="Light Eats" menuItems={LIGHT_EATS} />
        <Divider />
        <MenuSection title="All Day Breakfast" menuItems={ALL_DAY} />
        <Divider />
        <MenuSection title="Main Eats" menuItems={MAIN_EATS} />
        <Divider />
        <MenuSection title="Pasta" menuItems={PASTA} />
        <Divider />
        <Stack spacing={3} alignItems="center">
          <Typography variant="h2">Drinks</Typography>
          <DrinkSection
            title="Coffee"
            subtitle="Hot"
            drinkItems={DRINKS["coffee"]["hot"]}
          />
          <DrinkSection
            title="Coffee"
            subtitle="Ice-Blended"
            drinkItems={DRINKS["coffee"]["iceBlended"]}
          />
          <DrinkSection
            title="Coffee"
            subtitle="Iced"
            drinkItems={DRINKS["coffee"]["iced"]}
          />
          <DrinkSection
            title="Non-Coffee"
            subtitle="Hot"
            drinkItems={DRINKS["nonCoffee"]["hot"]}
          />
          <DrinkSection
            title="Non-Coffee"
            subtitle="Ice-Blended"
            drinkItems={DRINKS["nonCoffee"]["iceBlended"]}
          />
          <DrinkSection
            title="Non-Coffee"
            subtitle="Iced"
            drinkItems={DRINKS["nonCoffee"]["iced"]}
          />
          <DrinkSection title="Extras" drinkItems={DRINKS["extras"]} />
        </Stack>
      </Stack>
    </Box>
  );
}
