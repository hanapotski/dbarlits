import { Stack, Typography } from "@mui/material";
import BusinessHours from "./BusinessHours";
import SocialNav from "./SocialNav";

export default function Footer() {
  return (
    <footer>
      <Stack alignItems="center" mb={2} spacing={1}>
        <BusinessHours />
        <Stack spacing={-1} sx={{ background: "#6D499E" }} width="100vw" p={2}>
          <Typography
            variant="h6"
            align="center"
            color="secondary"
            fontWeight="bold"
          >
            Abigail’s Commercial Space
          </Typography>
          <Typography variant="overline" align="center" color="white">
            Kaparangan, Orani, Bataan
          </Typography>
        </Stack>

        <Stack>
          <SocialNav />
          <Typography>© 2022 Dbarlits</Typography>
          <a
            href="https://twitter.com/homemadecoder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography>Made by H with ❤️</Typography>
          </a>
        </Stack>
      </Stack>
    </footer>
  );
}
