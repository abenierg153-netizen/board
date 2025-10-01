import { Card } from "./card";

interface KPIProps {
  label: string;
  value: string;
}

export function KPI({ label, value }: KPIProps) {
  return (
    <Card>
      <div className="space-y-2">
        <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
        <p className="text-2xl font-display font-semibold">{value}</p>
      </div>
    </Card>
  );
}


