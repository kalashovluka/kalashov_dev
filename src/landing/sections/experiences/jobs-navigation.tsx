import { useState } from "react";
import { JOBS } from "./jobs";

export function JobsNavigation() {
  const [activeJob, setActiveJob] = useState<string>(Object.keys(JOBS)[0]);

  return (
    <div className="w-full lg:w-60 overflow-x-auto">
      <div className="flex lg:flex-col border-b lg:border-b-0 lg:border-l border-cyan">
        {Object.entries(JOBS).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setActiveJob(key)}
            className={`block shrink-0 cursor-pointer text-left px-4 py-3 transition-colors hover:text-cyan whitespace-nowrap ${
              activeJob === key
                ? 'text-cyan border-b-2 lg:border-b-0 lg:border-l-2 border-cyan lg:-ml-[1px]'
                : 'text-white/60'
            }`}
          >
            {value.position}
            <br />@ {value.company}
          </button>
        ))}
      </div>
    </div>
  );
}
