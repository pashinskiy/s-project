import React from "react";
import Slider from "../slider";
import Card from "./card";

/**
 * Блок конструктора "маленький слайдер обычных карточек"
 * @module src/components/constructor/smallSliderNormalCard
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.slice - объект слайса полученный из prismic
 */
export default function SmallSliderNormalCard({ slice }) {
  return (
    <Slider padding mobileScrollBar>
      {slice.items.map((item) => (
        <Card card={item} />
      ))}
    </Slider>
  );
}
