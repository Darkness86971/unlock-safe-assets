import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  initialHours?: number;
}

export const CountdownTimer = ({ initialHours = 48 }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(initialHours * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex flex-col items-center gap-2">
      <Clock className="w-12 h-12 text-accent animate-pulse" />
      <p className="text-sm text-foreground text-center">Data will be lost after</p>
      <div className="text-4xl font-bold text-foreground tracking-wider">
        {hours}h {minutes}m {seconds}s
      </div>
    </div>
  );
};
