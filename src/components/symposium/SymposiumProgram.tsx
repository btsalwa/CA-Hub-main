import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const SymposiumProgram = () => {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Symposium Programme</h2>
        <p className="text-lg text-gray-700 mb-6">
          This program contains an overview of the activities that are required
          to deliver the expected symposium outputs and results. The program
          shall be flexible without losing focus and shall be adjusted on a
          session-by-session basis in a participatory approach to accommodate
          emerging issues as the symposium progresses.
        </p>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Time</TableHead>
                <TableHead>Activity</TableHead>
                <TableHead className="w-[150px]">Responsibility</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="bg-gray-50 font-semibold">
                <TableCell colSpan={3}>SESSION I: OPENING SESSION</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>08:00 - 08:30</TableCell>
                <TableCell>Arrival and registration</TableCell>
                <TableCell>Secretariat</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>08:30 - 08:45</TableCell>
                <TableCell>
                  Welcome remarks, Overview of CA Hub-Kenya and CA Symposium
                  background and objectives
                </TableCell>
                <TableCell>CEO ACT/Chair, CA Hub-Kenya</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>08:45 - 09:00</TableCell>
                <TableCell>
                  Participants' introduction and expectations setting exercise
                </TableCell>
                <TableCell>Facilitator</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>09:00 - 09:30</TableCell>
                <TableCell>Opening remarks by 2-3 invited guests</TableCell>
                <TableCell>World Renew, Guest speakers</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>09:30 - 09:45</TableCell>
                <TableCell>Official Symposium Opening</TableCell>
                <TableCell>PS MoALF, GoK</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>09:45 - 10:30</TableCell>
                <TableCell>Group Photo/Coffee/Tea Break</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow className="bg-gray-50 font-semibold">
                <TableCell colSpan={3}>
                  SESSION II: FOCUSING ON BEST CA PRACTICES AND DEEP DIVING TO
                  SCALE THE LESSONS LEARNED
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>10:30 - 11:00</TableCell>
                <TableCell>Presentation of Best CA Practices</TableCell>
                <TableCell>Various Speakers</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>11:00 - 12:30</TableCell>
                <TableCell>Thematic group discussions</TableCell>
                <TableCell>Group Facilitators</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>12:30 - 13:00</TableCell>
                <TableCell>
                  Group presentations and plenary discussions
                </TableCell>
                <TableCell>Group Rapporteurs</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>13:00 - 14:00</TableCell>
                <TableCell>Lunch Break</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow className="bg-gray-50 font-semibold">
                <TableCell colSpan={3}>
                  SESSION III: STREAMLINING CA INTO PUBLIC AND PRIVATE SECTOR
                  PROGRAMS & STRATEGIES
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>14:00 - 15:30</TableCell>
                <TableCell>Thematic group discussions</TableCell>
                <TableCell>Group Chairs</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>15:30 - 16:00</TableCell>
                <TableCell>Symposium conclusions and discussion</TableCell>
                <TableCell>Rapporteurs</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>16:00 - 16:30</TableCell>
                <TableCell>Coffee/Tea and Networking</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>16:30</TableCell>
                <TableCell>Departure</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default SymposiumProgram;
