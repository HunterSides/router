import {
  installGlobals as installRemixGlobals,
  Response,
  RequestInit,
  RequestInfo,
  Request,
} from "@remix-run/node";

import { URL } from "node:url";
import { ExpoRouterServerManifestV1FunctionRoute } from "./types";

// Ensure these are available for the API Routes.
export function installGlobals() {
  installRemixGlobals();

  // @ts-expect-error
  global.Request = ExpoRequest;
  // @ts-expect-error
  global.Response = ExpoResponse;
  // @ts-expect-error
  global.ExpoResponse = ExpoResponse;
  // @ts-expect-error
  global.ExpoRequest = ExpoRequest;
}

export class ExpoResponse extends Response {
  // TODO: Drop when we upgrade to node-fetch v3
  static json(data: any = undefined, init: ResponseInit = {}): ExpoResponse {
    const body = JSON.stringify(data);

    if (body === undefined) {
      throw new TypeError("data is not JSON serializable");
    }

    const headers = new Headers(init?.headers);

    if (!headers.has("content-type")) {
      headers.set("content-type", "application/json");
    }

    return new ExpoResponse(body, {
      ...init,
      headers,
    });
  }
}

export const NON_STANDARD_SYMBOL = Symbol("non-standard");

export class ExpoURL extends URL {
  static from(
    url: string,
    config: ExpoRouterServerManifestV1FunctionRoute
  ): ExpoURL {
    const expoUrl = new ExpoURL(url);

    console.log(config);
    return expoUrl;
  }
}

// TODO: Flip regex to start with slash and end without slash
// Use named capture groups
// Convert named capture groups to allow dashes

export class ExpoRequest extends Request {
  [NON_STANDARD_SYMBOL]: {
    url: ExpoURL;
  };

  constructor(
    info: RequestInfo,
    init?: RequestInit,
    config?: ExpoRouterServerManifestV1FunctionRoute
  ) {
    super(info, init);

    const url =
      typeof info !== "string" && "url" in info ? info.url : String(info);

    this[NON_STANDARD_SYMBOL] = {
      url: config ? ExpoURL.from(url, config) : new ExpoURL(url),
    };
  }

  public get expoUrl() {
    return this[NON_STANDARD_SYMBOL].url;
  }
}
