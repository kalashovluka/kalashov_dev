type Props = {
  isOpen: boolean;
  className?: string;
};

export function MenuIcon({ isOpen, className = '' }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-full w-full ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <line
        x1="4"
        y1="6"
        x2="20"
        y2="6"
        className={`origin-[50%_6px] transition-transform duration-300 ${
          isOpen ? 'translate-y-[6px] rotate-45' : ''
        }`}
      />
      <line
        x1="4"
        y1="12"
        x2="20"
        y2="12"
        className={`transition-opacity duration-300 ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <line
        x1="4"
        y1="18"
        x2="20"
        y2="18"
        className={`origin-[50%_18px] transition-transform duration-300 ${
          isOpen ? '-translate-y-[6px] -rotate-45' : ''
        }`}
      />
    </svg>
  );
}
