import React from "react";
import { Box, Zoom, Fab } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import useScrollTrigger from "@mui/material/useScrollTrigger";

export default function ScrollTop() {
  const body = typeof document !== "undefined" && document.body;
  const trigger = useScrollTrigger({
    target: body || undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const scrollToTop = React.useCallback(() => {
    body && body.scrollTo({ top: 0, behavior: "smooth" });
  }, [body]);

  return (
    <Zoom in={trigger}>
      <Box
        role="presentation"
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          zIndex: 1,
        }}
      >
        <Fab
          onClick={scrollToTop}
          color="primary"
          size="small"
          aria-label="scroll back to top"
        >
          go to top
          <KeyboardArrowUp />
        </Fab>
      </Box>
    </Zoom>
  );
}
