const classColor = ["work", "play", "study", "exercise", "social", "self-care"];

const url = [
  "src/img/icon-work.svg",
  "src/img/icon-play.svg",
  "src/img/icon-study.svg",
  "src/img/icon-exercise.svg",
  "src/img/icon-social.svg",
  "src/img/icon-self-care.svg",
];

export const listCards = (data) => {
  return data
    .map((item, index) => {
      const mapClass = classColor.map((item) => {
        return item;
      });

      const mapUrl = url.map((item) => {
        return item;
      });
      return `

    <div class="card ${mapClass[index]}" > 
    <img class="icon-card" src="${mapUrl[index]}" alt="" />
    <div class="info-card">
      <div class="categ-more">
        <p class="category"></p>
        <p class="more">...</p>
      </div>
      <div class="period-hours">
        <p class="hour"></p>
        <p class="period"></p>
      </div>
    </div>
    </div>
    `;
    })
    .join("");
};
