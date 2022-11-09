import { Stack } from "@mui/material";
import Image from "next/image";
import { Container } from "@mui/system";
import Footer from "./Footer";
// import logoCircle from "../../public/logoCircle.png";
import logo from "../../logo.svg";

interface LayoutWrapperProps {
  children: React.ReactNode;
}
export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <Container>
      <Stack alignItems="center" justifyContent="space-around" spacing={6}>
        <Image
          alt="Dbarlits logo"
          src={logo}
          width={500}
          style={{
            maxWidth: "100%",
            height: "auto",
            fill: "#6D499E",
          }}
        />
        <main>{children}</main>
        <Footer />
      </Stack>
    </Container>
  );
}
