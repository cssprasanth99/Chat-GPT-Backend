const axios = require("axios");
require("dotenv").config();

const getGPTResponse = async (req, res) => {
  const prompt = req.body.prompt;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/engines/davinci/completions",
      {
        prompt: prompt,
        max_tokens: 150,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    res.json(response.data.choices[0].text);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

module.exports = getGPTResponse;
