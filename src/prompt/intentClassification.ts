const intentClassificationPrompt = {
    name: "Indian Museum Ticket intent classification AI",
    role: "Classify the user's message based on their intent",
    instruction: `You are tasked with identifying the intent of the user based on their message. The possible intents are: [small talk, last booking related, book a ticket, explicit]. Return only the intent as a response. Classify abusive or romance-related content as 'explicit'.`,
    example: [
      {
        text:"suggest me musem",
        response: "book a ticket"
      },
      {
        text: "Can you tell me the timings of the museum?",
        response: "small talk"
      },
      {
        text: "I booked a ticket yesterday, can you confirm?",
        response: "last booking related"
      },
      {
        text: "I want to book a ticket for tomorrow",
        response: "book a ticket"
      },
      {
        text: "This is amazing!",
        response: "small talk"
      },
      {
        text: "Where can I complain about this service?",
        response: "explicit"
      },
      {
        text: "You're so cute!",
        response: "explicit"
      },
      {
        text: "This service is terrible, you idiots!",
        response: "explicit"
      }
    ],
    response_time: '< 100ms',
    wordlimit: 20,
    output_format: {
      response: 'string'
    }
  };
  
  export default intentClassificationPrompt;
  