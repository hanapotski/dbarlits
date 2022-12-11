import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import { DESSERT } from "../../menuItems";

export default function DessertSection() {
  return (
    <Stack spacing={3} alignItems="center">
      <Stack>
        <Typography variant="h2">Desserts</Typography>
      </Stack>

      <Stack gap={4}>
        {DESSERT.map((item) => (
          <div key={item.id}>
            <Typography variant="h5" component="div">
              {item.title}
            </Typography>
            <Box p={1}>
              {item.options.map(({ option, price }, i) => (
                <Stack
                  key={`option-${i}`}
                  direction="row"
                  gap={4}
                  justifyContent="space-between"
                >
                  <Typography>{option}</Typography>
                  <Typography color="primary">{price}</Typography>
                </Stack>
              ))}
            </Box>
          </div>
        ))}
      </Stack>
    </Stack>
  );
}
