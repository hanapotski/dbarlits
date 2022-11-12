import { Stack, Typography } from "@mui/material";
import SocialNav from "./SocialNav";

export default function Footer() {
  return (
    <footer>
      <Stack alignItems="center" mb={2}>
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
