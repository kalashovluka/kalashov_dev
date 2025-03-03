import { ReactElement } from 'react';
import { useActiveSection } from '../context/use-active-section';
import { EmailIcon } from '../icons/email.icon';
import { LinkedInIcon } from '../icons/linkedin.icon';
import { TelegramIcon } from '../icons/telegram.icon';

function Link({
  title,
  href,
  icon,
  children,
}: {
  title: string;
  href: string;
  icon: ReactElement;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex items-center gap-3">
        <div className="w-4 h-4">{icon}</div>
        <span>{title}: </span>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan underline"
      >
        {children}
      </a>
    </>
  );
}

export function Contact() {
  useActiveSection('Contact');

  return (
    <section
      id="Contact"
      className="min-h-screen w-full text-white flex flex-col items-center mt-20"
    >
      <div className="relative">
        <h2 className="text-5xl font-bold mb-2">Contact Me</h2>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[105%] border-dashed-large" />
      </div>

      <div className="mt-10 max-w-3xl">
        <p>
          I am always happy to explore new opportunities and collaborate on
          exciting projects. If you have any questions or would like to discuss
          a potential collaboration, please don&apos;t hesitate to reach out.
        </p>

        <div className="inline-grid grid-cols-[auto_1fr] mt-10 gap-y-2 gap-x-5">
          <Link
            title="LinkedIn"
            href="https://linkedin.com/in/kalashov"
            icon={<LinkedInIcon />}
          >
            linkedin.com/in/kalashov
          </Link>

          <Link
            title="Email"
            href="mailto:kalashovluka@gmail.com"
            icon={<EmailIcon />}
          >
            kalashovluka@gmail.com
          </Link>

          <Link
            title="Telegram"
            href="https://t.me/kalashovluka"
            icon={<TelegramIcon />}
          >
            t.me/kalashovluka
          </Link>
        </div>
      </div>
    </section>
  );
}
