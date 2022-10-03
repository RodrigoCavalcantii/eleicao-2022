import React from 'react';
import "./customGrid.css";

function CustomGrid({allData}) {
  const [data,setData] = React.useState("");
  const [date,setDate] = React.useState("");
  const [secondRound,setSecondRound] = React.useState("");

  React.useEffect(() => {
    setDate(allData?.dt+" "+allData?.hg)
  },[allData?.dt,allData?.hg]);

  React.useEffect(() => {
    if(allData?.cand.length > 0){

      const numCad1 = Number(allData?.cand[0]?.pvap.replace(",","."));
      const percTot = Number(allData?.pst.replace(",","."));
      const difPerc = 100-percTot;

      if((difPerc+numCad1) > 50.1) {
        setSecondRound("Ate agora, segundo turno entre: ");
      } else if((numCad1) > 50.1) {
        setSecondRound("Ate agora, vitoria do: ");
      } else {
        setSecondRound("Confirmado o segundo turno entre: ");
      }
      
      setData([allData?.cand[0],allData?.cand[1],allData?.cand[2],allData?.cand[3]]);

    }
  },[allData?.cand]);

  return (
    <div>
          <h5>Atualizado: {date}</h5>
          <h5>{allData?.pst}% das seções totalizadas</h5>
          <h3>{secondRound} {allData?.cand[0]?.nm} e {allData?.cand[1]?.nm} </h3>
          <div className="grid">
            {data?.length > 0 && data?.map((obj) => (
                <div key={obj?.nm} className="card">
                    <p className="label-commun">{obj?.seq}&deg; lugar</p>
                    <p className="label-name">{obj?.nm.replace("&apos;","'")}</p>
                    <p className="label-commun">{obj?.pvap} %</p>
                    <p className="label-commun">{obj?.vap} Votos</p>
                </div>
            ))}
          </div>
    </div>
  );
}

export default CustomGrid;
