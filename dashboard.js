import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllFacts } from "../api/data.js";

const dashboardTemplate = (facts) => html`
  <h2>Fun Facts</h2>
  <section id="dashboard">
    ${facts.length == 0
      ? html`<h2>No Fun Facts yet.</h2>`
      : facts.map(
          (f) => html` <div class="fact">
            <img src="${f.imageUrl}" alt="example1" />
            <h3 class="category">${f.category}</h3>
            <p class="description">${f.description}</p>
            <a class="details-btn" href="/details/${f._id}">More Info</a>
          </div>`
        )}
  </section>
`;

export async function dashboardPage(ctx) {
  const events = await getAllFacts();
//   console.log(events);
  ctx.render(dashboardTemplate(events));
}
