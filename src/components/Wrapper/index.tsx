export default function Wrapper({ children }: React.PropsWithChildren) {
  return (
    <div className="mx-auto max-w-full lg:max-w-7xl p-3 lg:p-6">{children}</div>
  );
}
