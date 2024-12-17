"use client";
import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { addDays } from "date-fns";
import { useIsMobile } from "@/lib/hooks/use-mobile";
import { useEffect, useRef } from "react";

enum CALENDAR_VIEWS{
  LIST = 'listWeek',
  GRID = 'dayGridMonth'
}

export default function CalendarSection() {
  const calendarRef = useRef<FullCalendar | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if(calendarRef.current){
      const calendar = calendarRef.current.getApi()
      if(isMobile){
        calendar.changeView(CALENDAR_VIEWS.LIST)
      }else{
        calendar.changeView(CALENDAR_VIEWS.GRID)
      }
    }
  }, [isMobile])
  
  return (
    <FullCalendar
      ref={calendarRef}
      headerToolbar={{
        start: '',
        center:'title',
        end: 'today prev next'
      }}
      plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
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
          allDay: false,
        },
      ]}
      initialView={isMobile ? CALENDAR_VIEWS.LIST : CALENDAR_VIEWS.GRID}
    />
  );
}
