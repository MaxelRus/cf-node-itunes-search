import { ItunesResult } from "../result/result";
import { ISearchOptions, ItunesSearchOptions } from "./search-options";

export const itunesSearchRoot: string = "https://itunes.apple.com/search";

export function searchItunes(
  options: ISearchOptions | ItunesSearchOptions
): Promise<ItunesResult> {
  return new Promise((resolve, reject) => {
    //Initializing passed options (adding methods when directly passing an object)
    const searchOptions: ItunesSearchOptions =
      ItunesSearchOptions.from(options);

    fetch(`${itunesSearchRoot}?${searchOptions.toURI()}`)
      .then((res) =>
        res.json().then((body) => resolve(ItunesResult.from(body)))
      )
      .catch((err) => reject(err));
  });
}
