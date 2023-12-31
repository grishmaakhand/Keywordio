import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { ReactComponent as Arrow } from "../../../frontend/src/Img/Arrow.svg";
import { styled } from "@mui/system";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:last-child td": {
    borderBottom: 0,
  },
}));

export default function Tables({
  leftAlineHeading,
  rightAlineHeadingArrya,
  rows,
}) {
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <div className="flex  items-center gap-1">
                {leftAlineHeading}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="none"
                >
                  <path
                    d="M12 3L6.293 8.707a1 1 0 001.414 1.414L12 5.828l4.293 4.293a1 1 0 001.414-1.414L12 3z"
                    fill="#ECECEC"
                  />

                  <path
                    d="M12 21l5.707-5.707a1 1 0 00-1.414-1.414L12 18.172l-4.293-4.293a1 1 0 00-1.414 1.414L12 21z"
                    fill="grey"
                  />
                </svg>
              </div>
            </TableCell>

            <TableCell>
              <div className="flex justify-end items-center ">
                <div>{rightAlineHeadingArrya[0]}</div>
                <Arrow />
              </div>
            </TableCell>

            <TableCell>
              <div className="flex justify-end items-center ">
                <div>{rightAlineHeadingArrya[1]}</div>
                <Arrow />
              </div>
            </TableCell>
            <TableCell>
              <div className="flex  justify-end items-center ">
                <div>{rightAlineHeadingArrya[2]}</div>
                <Arrow />
              </div>
            </TableCell>
            <TableCell>
              <div className="flex justify-end items-center ">
                <div>{rightAlineHeadingArrya[3]}</div>
                <Arrow />
              </div>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <TableCell>
                <div className="flex  items-center ">{row.campaigns}</div>
              </TableCell>
              <TableCell align="right">
                <div className="flex justify-end items-center ">
                  {row.clicks}
                </div>
              </TableCell>
              <TableCell align="right">
                <div className="flex justify-end items-center ">{row.cost}</div>
              </TableCell>
              <TableCell align="right">
                <div className="flex justify-end items-center ">
                  {row.conversions}
                </div>
              </TableCell>
              <TableCell align="right">
                <div className="flex justify-end items-center ">
                  {row.revenue}
                </div>
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
