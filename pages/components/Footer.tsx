import { Stack, Typography } from "@mui/material";
import BusinessHours from "./BusinessHours";
import SocialNav from "./SocialNav";

export default function Footer() {
  return (
    <footer>
      <Stack alignItems="center" mb={2}>
        <BusinessHours />
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
    </footer>
  );
}
