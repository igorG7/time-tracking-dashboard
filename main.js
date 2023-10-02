import { data } from "./src/json/data.js";

const dataTimes = data;

const options = Array.from(document.getElementsByClassName("set-options"));
const category = Array.from(document.getElementsByClassName("category"));
const hour = Array.from(document.getElementsByClassName("hour"));
const period = Array.from(document.getElementsByClassName("period"));

let itemAttribute;
let itemActive;

const firstState = () => {
  category.map((item, index) => {
    const mapItems = dataTimes.map((item) => item.title);
    item.innerHTML = mapItems[index];

    hour.map((item, index) => {
      const mapItems = dataTimes.map((item) => item.timeframes.daily.current);
      item.innerHTML = `${mapItems[index]}hrs`;
    });

    period.map((item, index) => {
      const mapItems = dataTimes.map((item) => item.timeframes.daily.previous);
      item.innerHTML = `Last Day - ${mapItems[index]}hrs`;
    });
  });
};

firstState();

options.map((item) => {
  item.addEventListener("click", (e) => {
    itemAttribute = e.target.getAttribute("data-option");

    options.map((item) => {
      itemActive = item.getAttribute("data-option");

      if (itemActive === itemAttribute) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    switch (itemAttribute) {
      case "daily":
        hour.map((item, index) => {
          const mapItems = dataTimes.map(
            (item) => item.timeframes.daily.current
          );
          item.innerHTML = `${mapItems[index]}hrs`;
        });

        period.map((item, index) => {
          const mapItems = dataTimes.map(
            (item) => item.timeframes.daily.previous
          );
          item.innerHTML = `Last Day - ${mapItems[index]}hrs`;
        });
        break;

      case "weekly":
        hour.map((item, index) => {
          const mapItems = dataTimes.map(
            (item) => item.timeframes.weekly.current
          );
          item.innerHTML = `${mapItems[index]}hrs`;
        });

        period.map((item, index) => {
          const mapItems = dataTimes.map(
            (item) => item.timeframes.weekly.previous
          );
          item.innerHTML = `Last Week - ${mapItems[index]}hrs`;
        });
        break;

      case "monthly":
        hour.map((item, index) => {
          const mapItems = dataTimes.map(
            (item) => item.timeframes.monthly.current
          );
          item.innerHTML = `${mapItems[index]}hrs`;
        });

        period.map((item, index) => {
          const mapItems = dataTimes.map(
            (item) => item.timeframes.monthly.previous
          );
          item.innerHTML = `Last Month - ${mapItems[index]}hrs`;
        });
        break;

      default:
        "null";
    }
  });
});
