export default {
  name: 'landing-page-component',
  template: /* html */ `
    <div class="container py-4">
      <h1 class="mb-3">Welcome to Animetion Beach</h1>
      <p class="lead">A calm space to explore animation facts and stories with a soothing beach-inspired theme.</p>
      <router-link to="/items" class="btn btn-primary mb-4"><i class="bi bi-list-check me-1"></i>Explore Animation Facts</router-link>

      <h2 class="h4 mt-3">What this app does</h2>
      <p>
        Animetion Beach shares simple, calm facts about animation and how it is made. Each card shows a short idea, and you can open any fact to read the full detail.
      </p>
      <p>
        The app keeps the design easy and relaxed, with a soft beach palette and gentle layout. It loads the content from a CSV file so the data can be updated later with real information.
      </p>
    </div>
  `,
};
