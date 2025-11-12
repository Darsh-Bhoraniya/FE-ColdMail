export function Modal({
  open,
  onClose,
  title,
  children,
  footer,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900">
          <div className="border-b border-slate-200 p-4 text-sm font-semibold dark:border-slate-700">
            {title}
          </div>
          <div className="p-4">{children}</div>
          {footer ? (
            <div className="border-t border-slate-200 p-3 dark:border-slate-700">
              {footer}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
