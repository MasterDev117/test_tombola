import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

const data = [
  { id: 1, option: 10 },
  { id: 2, option: 20 },
  { id: 3, option: 30 },
  { id: 4, option: 40 },
  { id: 5, option: 10 },
  { id: 6, option: 20 },
  { id: 7, option: 30 },
  { id: 8, option: 40 }
];

export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [creditsRewards, setCreditsRewards] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <>
      <div align="center">
        <h1 align="center">Tombola Game</h1>
        <hr />
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          outerBorderColor={["#f2f2f2"]}
          outerBorderWidth={[25]}
          innerBorderColor={["#f2f2f2"]}
          radiusLineColor={["#dedede"]}
          radiusLineWidth={[10]}
          textColors={["#ffffff"]}
          fontSize={[50]}
          perpendicularText={[true]}
          backgroundColors={[
            "#a8e030",
            "#fc00d7",
            "#ff9e00",
            "#09bedf",
            "#a8e030",
            "#fc00d7",
            "#ff9e00",
            "#09bedf",
          ]}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
        <button className="button2" onClick={handleSpinClick}>
          Girar la Ruleta
        </button>
        <br />
        {!mustSpin ? data[prizeNumber].option : "0"}
        <br />
        Creditos disponibles: {creditsRewards}
        <hr />
      </div>
    </>
  );
};
