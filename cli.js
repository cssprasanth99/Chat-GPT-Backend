const readline = require("readline");
const axios = require("axios");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = () => {
  rl.question("You: ", async (question) => {
    try {
      const response = await axios.post("http://localhost:5000/api/gpt/chat", {
        prompt: question,
      });
      console.log("GPT-3:", response.data);
    } catch (error) {
      console.error("Error:", error.message);
    }
    askQuestion();
  });
};

askQuestion();
