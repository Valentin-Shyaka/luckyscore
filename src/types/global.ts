declare interface Credentials {
  email?: string | undefined;
  password?: string | undefined;
  provider?: "bitbucket" | "github" | "gitlab" | "google" | undefined;
}

declare interface Todo {
  id?: number;
  user_id: string;
  task: string;
  is_complete?: boolean;
  inserted_at?: string;
}

export interface ILink {
  name: string;
  href: string;
}

export interface IPlayerMatch {
  match_id: string;
  player_id: string;
  red_card: number;
  yellow_card: number;
  off_side: number;
  pitch_position: number;
  subbed: string;
  goals: number;
  assists: number;
  big_chances: number;
  successful_dribbles: number;
}

export interface IMatch {
  id: string;
  match_day: string;
  season: string;
  time: string;
  in_charge: string;
  description: string;
  match_status: string;
  home_team: string;
  away_team: string;
  home_shots: BigInteger;
  away_shots: BigInteger;
  home_score: BigInteger;
  away_score: BigInteger;
  home_lineup: string;
  away_lineup: string;
  home_corners: BigInteger;
  away_corners: BigInteger;
  home_shots_on_target: BigInteger;
  away_shots_on_target: BigInteger;
  home_fouls: BigInteger;
  away_fouls: BigInteger;
}

export interface IFixtures {
  name: string;
  matches: IMatch[];
}

export interface ITable {
  created_at: string;
  id: string;
}

export interface SupabaseAuthUser {
  avatar_url: string;
  email: string;
  email_verified: string;
  full_name: string;
  iss: string;
  nam: string;
  preferred_username: string;
  provider_id: string;
  sub: string;
  user_name?: string;
}

export const USER_STORAGE_NAME = "lucky_score_auth_user";
