import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { DrinkItem as DrinkItemProps } from "../../types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/material";

interface DrinkSectionProps {
  drinkItems: DrinkItemProps[];
  title: string;
  description?: string;
}
export default function DrinkSection({ title, description, drinkItems }: DrinkSectionProps) {
  return (
    <Stack spacing={3} alignItems="center">
      <Stack alignItems="center">
        <Typography variant="h4" fontWeight="bold" color="primary">
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </Stack>

      <TableContainer component={Box}>
        <Table aria-label="drinks table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="center">
                Hot
                <Chip label="12oz" color="primary" size="small" />
              </TableCell>
              <TableCell align="center">
                Iced
                <Chip label="16oz" color="secondary" size="small" />
              </TableCell>
              <TableCell align="center">
                Ice-Blended
                <Chip label="16oz" color="primary" size="small" />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {drinkItems.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="center">{row.hot || "-"}</TableCell>
                <TableCell align="center">{row.iced || "-"}</TableCell>
                <TableCell align="center">{row.iceBlended || "-"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
