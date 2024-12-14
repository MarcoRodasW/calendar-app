import CalendarSection from '@/components/pages/calendar/calendar-section'
import { DateRangePicker } from '@/components/shared/inputs/date-range-picker'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React from 'react'

export default function CalendarPage() {
  return (
    <section className='w-full h-full flex flex-col gap-5'>
      <div className=" gap-3 w-full flex flex-row items-center justify-end border-b py-1">
        <Button>
          <Plus size={18}/>
          New appointment
        </Button>
        <DateRangePicker/>
      </div>
      <CalendarSection/>
    </section>
  )
}
