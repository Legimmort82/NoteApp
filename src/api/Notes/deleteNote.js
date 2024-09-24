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
  const useDeleteNote = (options = {}) => {
    return useMutation({
      mutationFn: ({id}) => apiClient.delete(`/${id}`),
  
      ...options,
    });
  };
  
  export default useDeleteNote;
  