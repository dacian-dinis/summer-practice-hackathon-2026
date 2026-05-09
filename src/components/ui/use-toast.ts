export type ToastInput = {
  title?: string;
  description?: string;
};

export function useToast(): { toast: (_input: ToastInput) => void } {
  return {
    toast: () => undefined,
  };
}
