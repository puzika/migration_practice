type FailedRequest = {
  status: "failed",
  message: string,
}

type SuccessfulRequest<T> = {
  status: "success",
  result: T,
}

export type RequestResult<T> = FailedRequest | SuccessfulRequest<T>;