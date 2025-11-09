import { ReactNode } from "react";

interface StatusCardProps {
  icon: ReactNode;
  title: string;
  value: string;
}

export const StatusCard = ({ icon, title, value }: StatusCardProps) => {
  return (
    <div className="flex flex-col items-center gap-3 p-4">
      {icon}
      <p className="text-sm text-foreground text-center">{title}</p>
      <p className="text-2xl font-bold text-foreground">{value}</p>
    </div>
  );
};
