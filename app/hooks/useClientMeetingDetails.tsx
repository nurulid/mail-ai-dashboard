export function useClientMeetingDetails() {
  return {
    title: "Meeting with a client",
    description: "“FitMe” is a leading catering company that specializes in delivering daily, healthy food options.",
    client: {
      name: "FitMe",
      logo: "/logo-fitme.svg",
    },
    information: {
      date: "2024-08-12",
      location: "Google Meets",
      locationLink: "https://google/meeeeeets.jcd",
    },
    todos: [
      {
        name: "Product presentation",
        isDone: true,
      },
      {
        name: "Prototype or product demonstration",
        isDone: false,
      },
      {
        name: "Project portfolio and contract ",
        isDone: false,
      },
    ],
    attachments: [
      {
        file: "contract.doc",
        size: "95.8 Kb",
        date: "2024-06-24",
      },
      {
        file: "presentation.pdf",
        size: "417.2 Kb",
        date: "2024-06-24",
      },
    ],
    links: [
      "https://google.com",
      "https://fb.com",
      "https://tweet.com",
      "https://link.com",
    ],
    media: ["/Home.jpg", "/main.jpg", "/Mail.jpg"],
    tags: ["Businees", "Meet"],
  };
}
