/* ===========================================================
   나우 상사 — 동의 기본값과 동의 배너
   태그 관리자보다 먼저 돌아야 해서 화면 머리 맨 앞에서 부릅니다.
   =========================================================== */

/* --- 태그가 열리기 전에 네 신호를 모두 denied 로 둔다 --- */
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

gtag("consent", "default", {
  ad_storage: "denied",
  analytics_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied"
});

const CONSENT_KEY = "haru_consent";
const CONSENT_GRANTED = {
  ad_storage: "granted",
  analytics_storage: "granted",
  ad_user_data: "granted",
  ad_personalization: "granted"
};

const readConsent = () => {
  try { return localStorage.getItem(CONSENT_KEY); }
  catch (e) { return null; }
};
const saveConsent = value => {
  try { localStorage.setItem(CONSENT_KEY, value); }
  catch (e) {}
};

/* 앞 화면에서 수락을 골랐으면 태그가 열리기 전에 granted 로 올린다 */
if (readConsent() === "granted") gtag("consent", "update", CONSENT_GRANTED);

/* --- 화면 아래 배너와 「동의 다시 고르기」 링크 --- */
function paintConsent() {
  const style = document.createElement("style");
  style.textContent = `
    .consent-bar{position:fixed;left:0;right:0;bottom:0;z-index:50;
      background:var(--card);border-top:1px solid var(--line);
      padding:14px 20px;display:flex;align-items:center;gap:14px;
      font-size:13.5px;line-height:1.6}
    .consent-bar[hidden]{display:none}
    .consent-bar p{margin:0;color:var(--sub);flex:1}
    .consent-bar .btn{padding:9px 18px;font-size:13.5px}
    .consent-relink{text-align:center;padding:0 20px 26px;font-size:12.5px}
    .consent-relink a{color:var(--sub)}
    @media (max-width:640px){
      .consent-bar{flex-direction:column;align-items:stretch;gap:10px}
    }`;
  document.head.appendChild(style);

  const bar = document.createElement("div");
  bar.className = "consent-bar";
  bar.hidden = true;
  bar.innerHTML = `
    <p>방문 기록을 살펴보는 데 쿠키를 씁니다. 수락하시면 분석과 광고 신호를 함께 켭니다.</p>
    <button type="button" class="btn ghost" id="consent-no">거부</button>
    <button type="button" class="btn" id="consent-yes">수락</button>`;

  const relink = document.createElement("div");
  relink.className = "consent-relink";
  relink.innerHTML = `<a href="#" id="consent-again">동의 다시 고르기</a>`;

  document.body.append(bar, relink);

  bar.querySelector("#consent-yes").addEventListener("click", () => {
    gtag("consent", "update", CONSENT_GRANTED);
    saveConsent("granted");
    bar.hidden = true;
  });
  bar.querySelector("#consent-no").addEventListener("click", () => {
    saveConsent("denied");
    bar.hidden = true;
  });
  relink.querySelector("#consent-again").addEventListener("click", e => {
    e.preventDefault();
    bar.hidden = false;
  });

  if (!readConsent()) bar.hidden = false;
}

document.addEventListener("DOMContentLoaded", paintConsent);
