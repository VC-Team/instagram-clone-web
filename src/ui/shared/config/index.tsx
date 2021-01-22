export let BASE_URL = document.head.querySelector<any>(
  "[property~=base_url][content]"
).content;

export const SERVICES = {
  API_URL_BASE: 'http://localhost:9520/api/v1',
  CRM_URL_BASE: '',
  AuthenticationHeaderField: "JWT_TOKEN_HDBANK_CMS",
};