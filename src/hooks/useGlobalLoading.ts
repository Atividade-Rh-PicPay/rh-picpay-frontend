import { useSyncExternalStore } from "react";
import { subscribe, getActiveRequests } from "../services/loading.store";

export function useGlobalLoading() {
  const activeRequests = useSyncExternalStore(subscribe, getActiveRequests);
  return activeRequests > 0;
}
