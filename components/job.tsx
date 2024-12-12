import React from "react";

const Job = (props: any) => {
  return (
    <div className="border border-neutral-200  bg-neutral-50  rounded-lg flex flex-col items-center justify-between px-4 py-3 w-full">
      <div className="flex flex-col sm:flex-row justify-between w-full">
        <div className="font-bold text-neutral-900">{props.title}</div>
        <div className="text-base">{props.time}</div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between italic w-full">
        <div className="mr-2 flex-1 max-w-[70%] break-words">
          {props.company}
        </div>
        <div>{props.location}</div>
      </div>
      <ul className="list-disc pl-4 mt-1">
        {props.description.map((d: any, idx: number) => {
          return <li key={idx}>{d}</li>;
        })}
      </ul>
    </div>
  );
};

export default Job;
