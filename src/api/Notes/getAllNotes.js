import { UseQueryOptions } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../instance";
/**
 *
 * @param {UseQueryOptions} options
 * @returns UseQueryResult
 */
const useGetAllNotes = (options = {}) => {
  return useQuery({
    queryKey: ["Notes"],
    queryFn: () => apiClient.get(""),
    retry: 1,
    ...options,
  });
};
export default useGetAllNotes;
