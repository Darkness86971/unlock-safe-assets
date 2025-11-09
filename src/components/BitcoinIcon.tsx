export const BitcoinIcon = () => {
  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      <div className="absolute inset-0 bg-bitcoin rounded-full animate-pulse opacity-20"></div>
      <svg
        viewBox="0 0 32 32"
        className="w-12 h-12 relative z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="15" stroke="hsl(var(--bitcoin-orange))" strokeWidth="2" fill="hsl(var(--bitcoin-orange))" />
        <path
          d="M18.5 11.5c-.3-1.2-1.4-1.8-2.8-1.9V8h-1.2v1.6h-1v-1.6h-1.2v1.6H10v1.3h.8c.4 0 .7.3.7.7v6.8c0 .4-.3.7-.7.7H10v1.3h2.3v1.6h1.2v-1.6h1v1.6h1.2v-1.6c1.9-.1 3.2-.9 3.4-2.4.2-1.2-.3-2.1-1.2-2.6.5-.4.9-1.1.8-2zM13.3 12h1.5c.8 0 1.5.3 1.5 1.1 0 .7-.6 1.1-1.5 1.1h-1.5v-2.2zm1.8 7.2h-1.8v-2.4h1.8c.9 0 1.6.4 1.6 1.2 0 .8-.7 1.2-1.6 1.2z"
          fill="#000"
        />
      </svg>
    </div>
  );
};
