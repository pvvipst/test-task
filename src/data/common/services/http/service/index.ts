import axios from 'axios'

import type { IGetPayload, IHttpResponse, IHttpService, IPostPayload } from '@data/common'

import type { AxiosRequestConfig, AxiosInstance, AxiosError } from 'axios'

class HttpService implements IHttpService {

  protected _globalConfig: AxiosRequestConfig & { retry: boolean }

  protected _instance: AxiosInstance

  protected _droppedRequests: AxiosRequestConfig[]

  constructor (config: AxiosRequestConfig) {
    this._globalConfig = { retry: false }
    this._droppedRequests = []

    this._instance = axios.create({ ...config, ...this._globalConfig })

    this._interceptResponse()
  }

  public setHeaders (key: string, value: string | number | boolean): void {
    this._instance.defaults.headers.common[key] = value
  }

  public async get<Response> (url: string, payload?: IGetPayload): Promise<Response> {
    return this._instance.get(url, {
      params: payload?.params,
      ...this._globalConfig
    })
  }

  public async post<Response> (url: string, payload?: IPostPayload): Promise<Response> {
    return this._instance.post(url, payload?.body, {
      params: payload?.params,
      responseType: payload?.responseType,
      ...this._globalConfig
    })
  }

  public async put<Response> (url: string, payload?: IPostPayload): Promise<Response> {
    return this._instance.put(url, payload?.body, {
      params: payload?.params,
      ...this._globalConfig
    })
  }

  public async patch<Response> (url: string, payload?: IPostPayload): Promise<Response> {
    return this._instance.patch(url, payload?.body, {
      params: payload?.params,
      ...this._globalConfig
    })
  }

  public async delete<Response> (url: string, payload?: IPostPayload): Promise<Response> {
    return this._instance.delete(url, {
      params: payload?.params,
      data: payload?.body,
      ...this._globalConfig
    })
  }

  private _interceptResponse (): void {
    this._instance.interceptors.response.use(
      this._handleResponse.bind(this),
      this._handleErrorResponse.bind(this)
    )
  }

  private async _handleResponse (response: AxiosRequestConfig<IHttpResponse<unknown>>): Promise<unknown> {
    return Promise.resolve(response.data?.data === undefined ? response.data : response.data.data)
  }

  private async _handleErrorResponse (error: AxiosError): Promise<unknown> {
    console.log('promise reject', error.response?.data)
    return Promise.reject(error.response?.data)
  }

}

export { HttpService }
