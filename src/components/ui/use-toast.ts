"use client";

import { useSyncExternalStore } from "react";

export type ToastInput = {
  id?: string;
  title?: string;
  description?: string;
};

export type ToastItem = Required<Pick<ToastInput, "id">> & Omit<ToastInput, "id">;

type ToastStore = {
  toasts: ToastItem[];
};

const TOAST_DURATION_MS = 3200;

let store: ToastStore = {
  toasts: [],
};

const listeners = new Set<() => void>();

function emit(): void {
  for (const listener of listeners) {
    listener();
  }
}

function setStore(nextStore: ToastStore): void {
  store = nextStore;
  emit();
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot(): ToastStore {
  return store;
}

function dismiss(id: string): void {
  setStore({
    toasts: store.toasts.filter((toast) => toast.id !== id),
  });
}

function createToast(input: ToastInput): void {
  const id = input.id ?? crypto.randomUUID();
  const toast: ToastItem = {
    ...input,
    id,
  };

  setStore({
    toasts: [...store.toasts, toast],
  });

  window.setTimeout(() => {
    dismiss(id);
  }, TOAST_DURATION_MS);
}

export function useToast(): { toast: (input: ToastInput) => void; dismiss: (id: string) => void } {
  return {
    toast: createToast,
    dismiss,
  };
}

export function useToastStore(): ToastStore {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
