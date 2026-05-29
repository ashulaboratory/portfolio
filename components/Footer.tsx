import { links } from "@/data/links";

export default function Footer() {
  return (
    <footer className="border-t border-border px-10 py-10 text-center text-[0.8rem] text-fg-dim max-md:px-5">
      <div className="mb-4 flex justify-center gap-6">
        <a
          href={links.github}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-1.5 text-[0.85rem] text-fg-dim transition-colors hover:text-accent"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.51 11.51 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5z" />
          </svg>
          GitHub
        </a>
      </div>
      <div>© 2026 Ashisa Murakami</div>
    </footer>
  );
}
