"use client";

import { Toast, ToastDescription, ToastTitle } from "@/components/ui/toast";
import { useToastStore } from "@/components/ui/use-toast";

export function Toaster(): JSX.Element | null {
  const { toasts } = useToastStore();

  if (toasts.length === 0) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-x-4 top-4 z-50 flex flex-col items-end gap-2">
      {toasts.map((toast) => (
        <Toast
          className="w-full max-w-sm border-neutral-200 bg-white/95 text-neutral-950 shadow-lg backdrop-blur"
          key={toast.id}
        >
          {toast.title ? <ToastTitle>{toast.title}</ToastTitle> : null}
          {toast.description ? <ToastDescription>{toast.description}</ToastDescription> : null}
        </Toast>
      ))}
    </div>
  );
}
