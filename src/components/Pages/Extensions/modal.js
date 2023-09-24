import React from "react";

export default function MyModal(props) {
    const a = props.img
    const b = props.txt
    const som = props.closer
    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">


            <div className="bg-white p-2 rounded w-3/4 h-3/4 flex items-center justify-center">
                <button className="bg-red-800 p-5 rounded " onClick={() => { som(false) }}> X </button>

                <img src={a} className="w-3/4 h-3/4 p-10" />
                <div className="flex flex-col items-center justify-center">
                    <h1 className=" text-4xl p-5">{props.txt2}</h1>
                    <p>{b}</p>
                </div>
            </div>
        </div>
    );
}