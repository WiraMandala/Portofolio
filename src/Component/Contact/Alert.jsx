"use client";

export const Alert = ({ status, children }) => {
  const base = "flex gap-3 p-4 rounded-lg border";

  const variants = {
   success: "bg-[#022C22] border-[#10B981] text-[#10B981]",
    error: "bg-red-500/10 border-red-500 text-red-400",
  };

  return <div className={`${base} ${variants[status]}`}>{children}</div>;
};

export const AlertIndicator = () => <div>●</div>;

export const AlertContent = ({ children }) => (
  <div className="flex flex-col">{children}</div>
);

export const AlertTitle = ({ children }) => (
  <span className="font-semibold">{children}</span>
);

export const AlertDescription = ({ children }) => (
  <span className="text-sm opacity-80">{children}</span>
);