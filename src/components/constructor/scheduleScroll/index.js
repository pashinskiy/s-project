import React from "react";
import ScrollBar from "./scrollBar";
import ScheduleCard from "./sheduleCard";
import BlockHeaderText from "../../blockHeaderText";

/**
 * Блок конструктора "Расписание"
 * @module src/components/constructor/scheduleScroll
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.slice - объект слайса полученный из prismic
 */

export default function ScheduleScroll({ slice }) {
  const schedules = slice.primary.schedule.document.data.body.map(
    (item) => item
  );
  return (
    <>
      <BlockHeaderText text="Расписание" />
      <ScrollBar>
        {schedules.map((schedule, i) => (
          <ScheduleCard key={"child-" + i} schedule={schedule} />
        ))}
      </ScrollBar>
    </>
  );
}
