type Props = {
  title?: string;
  link?: string;
  bullets: string[];
};

export function JobEntry({ title, link, bullets }: Props) {
  return (
    <>
      {title && (
        <div className="mt-4 lg:mt-10 mb-2 text-sm lg:text-lg font-bold">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-cyan underline"
            href={link}
          >
            {title}
          </a>{' '}
          · Contract
        </div>
      )}
      <ul className="space-y-4 list-triangle-sm lg:list-triangle">
        {bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    </>
  );
}
