export function FieldError({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <p className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-sm text-amber-100">
      {message}
    </p>
  );
}
