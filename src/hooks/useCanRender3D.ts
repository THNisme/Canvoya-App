'use client';

import { useSyncExternalStore } from 'react';

function subscribe(callback: () => void) {
  window.addEventListener('resize', callback);
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  mq.addEventListener('change', callback);
  return () => {
    window.removeEventListener('resize', callback);
    mq.removeEventListener('change', callback);
  };
}

function getSnapshot() {
  const isMobile = window.innerWidth < 768;
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;
  return !isMobile && !prefersReducedMotion;
}

function getServerSnapshot() {
  return false;
}

export function useCanRender3D() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
