import React from "react";

const Job = (props: any) => {
  return (
    <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50  dark:bg-neutral-800 rounded flex flex-col items-center justify-between px-3 py-4 w-full">
      <div className="flex flex-col sm:flex-row justify-between w-full">
        <div className="font-bold text-neutral-900 dark:text-neutral-100">
          {props.title}
        </div>
        <div className="text-base">{props.time}</div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between italic w-full">
        <div>{props.company}</div>
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
