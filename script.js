const planText = document.querySelector("#planText");
const tabs = document.querySelectorAll(".tab");
const form = document.querySelector(".contact-form");
const note = document.querySelector(".form-note");

const copy = {
  light: "1ページ構成。プロフィール、サービス紹介、問い合わせ導線をすっきり掲載します。",
  standard: "写真ギャラリーや制作実績を追加。雰囲気まで伝わるサイトに整えます。",
  plus: "予約導線、ニュース欄、更新しやすい構成まで含めて、運用しやすくします。"
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");
    planText.textContent = copy[tab.dataset.plan];
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get("name") || "お客さま";
  const type = data.get("type");
  note.textContent = `${name}、${type}の相談デモを受け付けました。実際には送信されません。`;
});
