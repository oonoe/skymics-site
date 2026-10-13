/* =========================================================
   SkyMics — конфигурация сайта
   Меняй только этот файл: ссылки, версии, соцсети, скриншоты.
   ========================================================= */

window.SKYMICS = {
  /* Адрес сайта — для SEO и шаринга (canonical, og:url, schema.org) */
  siteUrl: "https://skymics.fun/",

  /* ← сюда вставь ссылку на скачивание, когда она появится */
  downloadUrl: "", // например: "https://github.com/user/repo/releases/download/v1.0/SkyMics-1.0.jar"

  version: "1.0",
  mcVersion: "1.21.11",

  /* Ссылки на соцсети. Пустая строка — пункт не показывается. */
  socials: {
    discord: "", // "https://discord.gg/xxxxx"
    telegram: "https://t.me/skymics",
    youtube: "", // "https://youtube.com/@xxxxx"
    support: "https://t.me/skymics", // ссылка на баг-репорт / поддержку
  },

  /* Галерея: клади картинки в папку assets/ и прописывай здесь.
     Пустые слоты сайт сам покажет подсказками. */
  screenshots: [
    { src: "assets/screen-gui.jpg", title: "Панель SkyMics — модули и настройки", wide: true },
    { src: "assets/screen-hud.jpg", title: "HUD: кулдауны, бинды и координаты" },
  ],
};
