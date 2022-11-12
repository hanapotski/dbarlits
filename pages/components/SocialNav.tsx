import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton, Stack } from "@mui/material";

export default function SocialNav() {
  return (
    <Stack justifyContent="center" direction="row">
      <IconButton
        href="https://www.facebook.com/dbarlits"
        aria-label="Facebook icon"
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        href="https://www.instagram.com/dbarlits_food/"
        aria-label="Facebook icon"
      >
        <InstagramIcon />
      </IconButton>
    </Stack>
  );
}
