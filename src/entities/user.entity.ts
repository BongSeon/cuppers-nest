export interface BasicUserInfo {
  id: number
  nickname: string
  thumbnail_url: string
}

export interface User extends BasicUserInfo {
  email?: string
  lv: number
  name?: string
  description: string
  created_at: string
  updated_at?: string
  login_at?: string // 마지막 로그인 시간
  // is_host?: boolean // 카페의 host인지 여부
  is_following?: boolean // 내가 팔로우한 유저인지 여부
  user_surveyed?: boolean
  // is_necessary_terms_agreed?: boolean
  // is_optional_terms_agreed?: boolean
}
