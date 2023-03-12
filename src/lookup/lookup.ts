import { ItunesResult } from "../result/result";
import {
  ILookupOptions,
  ItunesLookupOptions,
  ItunesLookupType,
} from "./lookup-options";

export const itunesLookupRoot: string = "https://itunes.apple.com/lookup";

export function lookupItunes(
  options: ILookupOptions | ItunesLookupOptions
): Promise<ItunesResult> {
  return new Promise((resolve, reject) => {
    //Initializing passed options (adding methods when directly passing an object)
    const lookupOptions: ItunesLookupOptions =
      ItunesLookupOptions.from(options);

    fetch(`${itunesLookupRoot}?${lookupOptions.toURI()}`)
      .then((res) =>
        res.json().then((body) => resolve(ItunesResult.from(body)))
      )
      .catch((err) => reject(err));
  });
}
