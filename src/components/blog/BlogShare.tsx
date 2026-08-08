import { Linkedin, Link2, MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface BlogShareProps {
  title: string;
  url: string;
}

export function BlogShare({ title, url }: BlogShareProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: Linkedin,
    },
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: XIcon,
    },
    {
      label: "Share on WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      icon: MessageCircle,
    },
  ];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast({ title: "Link copied", description: "The blog link has been copied to your clipboard." });
    } catch {
      toast({ title: "Couldn't copy link", variant: "destructive" });
    }
  };

  return (
    <div className="flex items-center gap-2">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f97415]/40 hover:text-[#f97415]"
        >
          <link.icon className="h-4 w-4" />
        </a>
      ))}
      <button
        onClick={handleCopyLink}
        aria-label="Copy link"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f97415]/40 hover:text-[#f97415]"
      >
        <Link2 className="h-4 w-4" />
      </button>
    </div>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
