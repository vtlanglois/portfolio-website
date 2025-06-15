export default function SkipToMainContentJumpLink() {
  return (
    <a
      href="#main"
      className="text-foreground-secondary dark:text-foreground bg-secondary dark:bg-cool-blue absolute top-0 left-0 z-50 w-full -translate-y-full p-3 text-center underline focus-visible:translate-y-0 motion-safe:transition-transform motion-safe:duration-200"
    >
      Skip to Main Content
    </a>
  );
}
