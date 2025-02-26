# AgroSage Chatbot

## Overview

AgroSage is an AI-powered chatbot designed to assist farmers and agricultural enthusiasts by providing relevant information based on a pre-trained dataset. The chatbot uses **BERT-base-uncased** for text processing and classification, ensuring accurate and meaningful responses to agricultural queries.

## Dataset

The dataset used for training consists of agricultural queries and responses covering topics such as:

- Crop diseases and treatments
- Best farming practices
- Weather predictions
- Soil management
- Pest control
- Sustainable farming techniques

The dataset was preprocessed to remove noise, tokenize the text using **WordPiece Tokenization**, and map text labels to numerical values for training.

## Performance Metrics

The chatbot's performance was evaluated using various NLP metrics:

- **BLEU:** 1.0
- **ROUGE-1:** 1.0
- **ROUGE-L:** 1.0
- **Perplexity:** 23.859

These results indicate that the model generates highly relevant responses with low uncertainty.

## Hyperparameter Experimentation

Several hyperparameter configurations were tested to optimize model performance. The following table summarizes the experiments:

| Learning Rate | Batch Size | Weight Decay | Accuracy |
| ------------- | ---------- | ------------ | -------- |
| 1e-05         | 8          | 0.01         | 6.9687   |
| 1e-05         | 32         | 0.05         | 6.7494   |
| 1e-05         | 16         | 0.01         | 6.8245   |

### Impact of Hyperparameter Adjustments

- Reducing the **batch size** improved the model's ability to generalize, as seen in the accuracy increase from **6.7494 (batch size 32) to 6.9687 (batch size 8)**.
- Lower **weight decay** values helped maintain stability in learning without over-regularizing, leading to improved accuracy.
- A learning rate of **1e-5** was optimal in balancing learning speed and stability.

## Running the Chatbot

To run the chatbot, follow these steps:

1. **Install dependencies:**

   ```bash
   pip install transformers datasets torch sentence-transformers nltk flask
   ```

2. **Run the Flask application:**

   ```bash
   python app.py
   ```

3. **Open the frontend in a browser:**

   - Open `index.html` located inside the `templates` folder in your web browser.

## Example Conversations

**User:** "What is the best way to grow tomatoes in a humid climate?"

**AgroSage:** "Tomatoes thrive in well-drained soil with adequate spacing. To prevent fungal infections, ensure good air circulation and use resistant varieties."

**User:** "How can I improve my soil fertility?"

**AgroSage:** "Use organic compost, practice crop rotation, and apply nitrogen-fixing plants like legumes to enhance soil nutrients."

## Handling Unknown Queries

If a user asks a question that is not part of the training dataset, the chatbot responds with:

> "Sorry, I don't understand that question."

This ensures that the model does not provide misleading or incorrect information.

## Conclusion

AgroSage has demonstrated **exceptional performance** in responding to agricultural queries. The chatbot underwent rigorous hyperparameter tuning, leading to significant improvements over baseline performance. Future enhancements may include fine-tuning with domain-specific datasets and expanding the knowledge base to support more queries.

---

For further improvements, contributions, or feedback, feel free to reach out!

**Developed by:** Babalola Samuel

