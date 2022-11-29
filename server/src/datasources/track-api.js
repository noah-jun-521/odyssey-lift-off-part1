import { RESTDataSource } from "apollo-datasource-rest";

export class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
  }

  getTracksForHome() {
    return this.get("tracks");
  }

  getAuthor(authorID) {
    return this.get(`author/${authorID}`);
  }
}
