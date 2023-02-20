import "./calculadora.css";
import { useState } from "react";
import {  pi, round } from "mathjs";


export function Calculator() {
  let [concat, setConcat] = useState("0");
  const n = ["C","DE","%","/",7,8,9,"x",4,5,6,"-",1,2,3,"+",0,".","π","=",];
  function cero(e){
    if(concat === '0'){
        let nuevo = concat.slice(0, concat.length - 1);
        concat = nuevo;
        return concat += e
    }
  }

  return (
    <div className="cal-black">
      <section className="cabecera-cal">
        <input className="vist-resul" readOnly value={concat}/>
      </section>
      <section className="conten-button">
        {n.map((e, i) => {
          return (
            <button
              onClick={() => {
                if (e === "=") {
                  setConcat(round(eval(concat), 3));
                } else if (e === "C") {
                  setConcat((concat = "0"));
                } else if (e !== "C" && e !== "DE") {
                  if (e === "x") {
                    e = "*";
                  } else if (e === "π") {
                    e = round(pi, 3);
                  }
                  setConcat(concat === '0'?  cero(e): concat += e);
                } else if (e === "DE") {
                    if(concat.length === 1){
                        // setConcat(concat.slice(0, concat.length - 1));
                        setConcat('0');
                    }else if(concat !== " ") {
                        setConcat(concat.slice(0, concat.length - 1));
                    }
            
                }
              }}
              key={i}
            >
              {e}
            </button>
          );
        })}
      </section>
    </div>
  );
}
