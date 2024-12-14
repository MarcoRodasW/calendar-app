"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { addDays } from "date-fns";

export default function CalendarSection() {
  return (
    <FullCalendar
      headerToolbar={false}
      plugins={[dayGridPlugin, interactionPlugin]}
      eventTimeFormat={{
        hour: "numeric",
        minute: "2-digit",
        meridiem: "short",
      }}
      eventClassNames={"cursor-pointer"}
      eventClick={(args) => console.log(args.event)}
      events={[
        {
          id: Math.random().toString(),
          title: "Test event",
          start: new Date(),
          end: addDays(new Date(), 5),
        //   date: new Date(),
          allDay: false
        },
      ]}
      initialView="dayGridMonth"
    />
  );
}
