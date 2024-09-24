import {
  useMutation,
  UseMutationOptions,
} from "@tanstack/react-query";
import { apiClient } from "../instance";

/**
 * login user with credentials
 * @param {UseMutationOptions} options
 * @returns UseMutationResult
 */
const useAddNote = (options = {}) => {
  return useMutation({
    mutationFn: (data) => apiClient.post("", data),

    ...options,
  });
};

export default useAddNote;
