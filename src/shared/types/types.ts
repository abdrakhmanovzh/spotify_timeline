export type UserType = {
  country: string;
  email: string;
  display_name: string;
  followers: {
    href: string;
    total: number;
  };
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  product: string;
  type: string;
  uri: string;
};

export type TopItem = Artist | Track;

export type Artist = {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
};

export type Track = {
  album: {
    album_type: string;
    total_tracks: number;
    available_markets: string[];
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    images: {
      height: number;
      url: string;
      width: number;
    }[];
    name: string;
    release_date: string;
  };
  id: string;
  artists: Artist[];
  duration_ms: number;
  name: string;
  popularity: number;
};

export type TopItemResponse = {
  href: string;
  limit: number;
  total: number;
  items: TopItem[];
};

export type TimeRange = "short_term" | "medium_term" | "long_term";

export type FiltersResponse = {
  items: Track[];
};

export type FilterMode = "artists" | "tracks";
