import { useState } from 'react';
import { useActiveSection } from '../../context/use-active-section';
import { JOBS } from './jobs.constants';
import { JobsNavigation } from './jobs-navigation';
import { JobEntry } from './job-entry';

export function Experiences() {
  useActiveSection('Experiences');

  const [activeJob, setActiveJob] = useState<string>(Object.keys(JOBS)[0]);
  const selectedJob = JOBS[activeJob];

  return (
    <section
      id="Experiences"
      className="min-h-screen w-full text-white flex flex-col items-center pt-20"
    >
      <div className="relative">
        <h2 className="text-2xl lg:text-4xl font-bold mb-2">Experiences</h2>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[105%] border-dashed-large" />
      </div>

      <div className="w-full max-w-6xl mt-10 lg:mt-20 flex flex-col lg:flex-row gap-8 lg:text-base text-xs">
        <JobsNavigation activeJob={activeJob} setActiveJob={setActiveJob} />

        {selectedJob && (
          <div className="flex-1">
            <h3 className="text-base lg:text-2xl font-bold text-cyan mb-1">
              <span className="text-white">{selectedJob.position} </span>
              <br className="lg:hidden" />
              <a
                href={selectedJob.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative after:absolute after:bg-cyan after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300"
              >
                @ {selectedJob.company}
              </a>
            </h3>
            <p className="text-white/60 mb-6">{selectedJob.period}</p>
            {selectedJob.details.map((details, i) => (
              <JobEntry
                key={i}
                link={details.link}
                title={details.title}
                bullets={details.bullets}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
