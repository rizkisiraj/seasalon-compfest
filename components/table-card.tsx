
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "./ui/button"
import { ReactNode } from "react"

export default function TableCard({ type, data }: { type: string, data: any[] }) {
  return (
    <Card>
      <CardHeader className="px-7">
        <div className="flex justify-between items-center">
            <div>
                <CardTitle>{type === "service" ? "Services" : "Reservations"}</CardTitle>
                <CardDescription>{type === "service" ? "All services in this branch" : "All reservations in this branch"}</CardDescription>
            </div>
        {
            type === "service" && (
                <Button>Add Service</Button>
            )
        }
        </div>
      </CardHeader>
      <CardContent>
        <Table>
            {
                type === "service" ? (
                    <>
                    <TableHeader>
                        <TableRow>
                        <TableHead>Service Name</TableHead>
                        <TableHead className="hidden sm:table-cell">Duration</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                      {
                        data.length > 0 ? data.map((service: any) => {
                          return (
                            <TableRow key={service.id} className="bg-accent">
                              <TableCell>
                                  {service.name}
                              </TableCell>
                              <TableCell className="hidden sm:table-cell">{`${service.duration} hours`}</TableCell>
                            </TableRow>
                          )
                        }) : null
                      } 
                    </TableBody>
                    </>
                ) : (
                    <>
                    <TableHeader>
                        <TableRow>
                        <TableHead>Customer</TableHead>
                        <TableHead className="hidden sm:table-cell">Service</TableHead>
                        <TableHead className="hidden sm:table-cell">Date</TableHead>
                        <TableHead className="hidden sm:table-cell">Start</TableHead>
                        <TableHead className="hidden sm:table-cell">End</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className="bg-accent">
                        <TableCell>
                            <p className="font-medium">Service 1</p>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">2 Hours</TableCell>
                        <TableCell className="hidden sm:table-cell">2 Hours</TableCell>
                        <TableCell className="hidden sm:table-cell">2 Hours</TableCell>
                        <TableCell className="hidden sm:table-cell">2 Hours</TableCell>
                        </TableRow>
                    </TableBody>
                    </>
                )
            }
          
        </Table>
      </CardContent>
    </Card>
  )
}
