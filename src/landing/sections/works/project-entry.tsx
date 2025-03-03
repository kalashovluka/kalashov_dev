import { ProjectEntryDesktop } from './project-entry-desktop';
import { ProjectEntryMobile } from './project-entry-mobile';
import { ProjectEntryProps } from './project-entry.types';

export function ProjectEntry(props: ProjectEntryProps) {
  return (
    <>
      <ProjectEntryDesktop {...props} />
      <ProjectEntryMobile {...props} />
    </>
  );
}
