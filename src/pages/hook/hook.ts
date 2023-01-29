import { ref, Ref } from "vue";

type TApiFun<TData, TParams extends any[]> = (
  ...params: TParams
) => Promise<TData>;

interface AutoRequestOptions {
  loading?: boolean;
  onSuccess?: (data: any) => void;
}

type AutoRequestResult<TData, TParams extends Array<any>> = [
  Ref<boolean>,
  TApiFun<TData, TParams>
];

export function useAutoRequest<TData, TParams extends any[] = any[]>(
  fun: TApiFun<TData, TParams>,
  options?: AutoRequestOptions
): AutoRequestResult<TData, TParams> {
  const { loading = false, onSuccess } = options || { loading: false };
  const requestLoading = ref(loading);

  const run: TApiFun<TData, TParams> = (...params: TParams) => {
    requestLoading.value = true;
    return fun(...params)
      .then(async (res) => {
        onSuccess && (await onSuccess(res));
        return res;
      })
      .finally(() => {
        requestLoading.value = false;
      });
  };
  return [requestLoading, run];
}
