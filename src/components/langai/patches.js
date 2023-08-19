// Patch Notes Object
export const patches = [
  {
    version: "v0.1.1",
    date: "18/08/2023",
    changes: [
      "Added a page to see all parts of the series, just click the 'All parts' button at the top.",
      "Improved the onboarding experience on the story page.",
    ],
  },
  {
    version: "v1.0.0",
    date: "17/08/2023",
    changes: [
      "Added intro overlay to home page & story page.",
      "Fixed some android styling/animation issues.",
    ],
  },
  {
    version: "v0.0.6",
    date: "15/08/2023",
    changes: [
      "Translation box on the story page is now easier to read.",
      "Fixed a problem with dictionary not loading all words.",
      "New Splash/icon.",
      "When showing pinyin at different font sizes, it should jump less.",
      "Last week stories now show up on the home page (properly filtered).",
      "Various styling improvements to make the app look more cohesive.",
    ],
  },
  {
    version: "v0.0.5",
    date: "11/08/2023",
    changes: [
      "Fixed heading border issue on stories page.",
      "Non-styling improvements to all pages.",
      "When the device is offline, the stories should now load correctly from cache.",
      "Data fetching optimized / Cleaned up.",
      "On the backend - votes automatically calculated after duration has been reached (WIP).",
      "Punctuation improvements on the backend.",
    ],
  },
  {
    version: "v0.0.4",
    date: "03/08/2023",
    changes: [
      "Fixed haptics for android.",
      "Added loading skeleton for the home page.",
      "Internal code cleanup.",
    ],
  },
  {
    version: "v0.0.3",
    date: "26/08/2023",
    changes: [
      "Initial release of .apk files.",
      "Backend updated to handle voting duration cutoff.",
    ],
  },
];
