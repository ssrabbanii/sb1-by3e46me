import { useState, useEffect } from 'react';
import type { OrderStatus } from '../types';
import { STATUS_STEPS } from '../constants';

export function useOrderStatus(initialStatus: OrderStatus) {
  const [status, setStatus] = useState(initialStatus);
  const currentStep = STATUS_STEPS.indexOf(status);
  const progress = (currentStep / (STATUS_STEPS.length - 1)) * 100;

  useEffect(() => {
    setStatus(initialStatus);
  }, [initialStatus]);

  return {
    status,
    progress,
    currentStep,
    isComplete: status === 'delivered',
  };
}