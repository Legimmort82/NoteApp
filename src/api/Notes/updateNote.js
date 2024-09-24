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
  const useUpdateNote = (options = {}) => {
    return useMutation({
      mutationFn: ({data,id}) => apiClient.put(`/${id}`, data),
  
      ...options,
    });
  };
  
  export default useUpdateNote;
  