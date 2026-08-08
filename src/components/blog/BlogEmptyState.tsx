import type { LucideIcon } from "lucide-react";
import { Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface BlogEmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function BlogEmptyState({
  icon: Icon = Newspaper,
  title,
  description,
  actionLabel,
  onAction,
  secondaryLabel,
  secondaryHref,
}: BlogEmptyStateProps) {
  return (
    <div className="relative mx-auto flex max-w-lg flex-col items-center overflow-hidden rounded-2xl border border-border/60 bg-card px-6 py-14 text-center sm:px-12 sm:py-20">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-40 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(249,116,21,0.14), transparent)" }}
      />
      <div
        className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-full border"
        style={{ backgroundColor: "rgba(249, 116, 21, 0.08)", borderColor: "rgba(249, 116, 21, 0.25)" }}
      >
        <Icon className="h-6 w-6" style={{ color: "#f97415" }} strokeWidth={1.5} />
      </div>
      <h3 className="relative mb-3 font-display text-xl font-bold text-foreground sm:text-2xl">{title}</h3>
      <p className="relative mb-8 max-w-sm text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
        {description}
      </p>
      {(actionLabel || secondaryLabel) && (
        <div className="relative flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row sm:gap-6">
          {actionLabel && onAction && (
            <Button variant="hero" onClick={onAction} className="w-full sm:w-auto">
              {actionLabel}
            </Button>
          )}
          {secondaryLabel && secondaryHref && (
            <Link
              to={secondaryHref}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
