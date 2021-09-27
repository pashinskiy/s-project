import React from "react";
import Slider from "../slider";
import Card from "./card";

/**
 * Блок конструктора "маленький слайдер больших карточек"
 * @module src/components/constructor/smallSliderBigCard
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.slice - объект слайса полученный из prismic
 */
export default function SmallSliderBigCard({ slice }) {
  return (
    <Slider>
      {slice.items.map((item) => (
        <Card card={item} />
      ))}
    </Slider>
  );
}
