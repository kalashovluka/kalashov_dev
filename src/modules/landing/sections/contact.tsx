import type { ReactElement, ReactNode } from "preact/compat";
import { EmailIcon } from "../../icons/email.icon";
import { LinkedInIcon } from "../../icons/linkedin.icon";
import { TelegramIcon } from "../../icons/telegram.icon";
import { useSectionObserver } from "../state/use-section-observer";

function Link({
    title,
    href,
    icon,
    children,
  }: {
    title: string;
    href: string;
    icon: ReactElement;
    children: ReactNode;
  }) {
    return (
      <>
        <div className="flex items-center gap-3">
          <div className="h-4 w-4">{icon}</div>
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
    useSectionObserver('Contact');
  
    return (
      <section
        id="Contact"
        className="flex min-h-screen w-full flex-col items-center justify-center text-white"
      >
        <div className="relative">
          <h2 className="mb-2 text-2xl font-bold lg:text-4xl">Contact Me</h2>
          <div className="border-dashed-large absolute bottom-0 left-1/2 w-[105%] -translate-x-1/2" />
        </div>
  
        <div className="mt-10 max-w-3xl max-lg:text-sm">
          <p className="text-center lg:px-4">
            I am always happy to explore new opportunities and collaborate on
            exciting projects. If you have any questions or would like to discuss
            a potential collaboration, please don&apos;t hesitate to reach out.
          </p>
  
          <div className="flex w-full flex-col items-center">
            <div className="mt-10 inline-grid grid-cols-[auto_1fr] gap-x-5 gap-y-2">
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
  
            <div className="mt-8 flex justify-center">
              <a
                href="/Luka Kalashov Fullstack.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan border-cyan rounded-sm border px-8 py-2 text-lg"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  