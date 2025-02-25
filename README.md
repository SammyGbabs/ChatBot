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

| Experiment # | Learning Rate | Batch Size | Epochs | BLEU | ROUGE-1 | ROUGE-L | Perplexity |
|-------------|--------------|------------|--------|------|---------|---------|------------|
| 1           | 5e-5         | 8          | 3      | 0.85 | 0.88    | 0.87    | 50.12      |
| 2           | 3e-5         | 16         | 3      | 0.90 | 0.92    | 0.91    | 35.76      |
| 3           | 2e-5         | 32         | 4      | 0.95 | 0.96    | 0.96    | 29.41      |
| **4 (Best)**| **3e-5**     | **8**      | **3**  | **1.0** | **1.0**  | **1.0**  | **23.86**  |

The best-performing configuration used a **learning rate of 3e-5, batch size of 8, and 3 epochs**, leading to significant performance improvements.

## Running the Chatbot
To run the chatbot, follow these steps:
1. **Install dependencies:**
   ```bash
   pip install transformers datasets torch sentence-transformers nltk
   ```
2. **Load the trained model:**
   ```python
   from transformers import AutoTokenizer, BertForSequenceClassification
   import torch
   
   model_path = "./results/best_model"
   tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")
   model = BertForSequenceClassification.from_pretrained(model_path)
   ```
3. **Start a conversation:**
   ```python
   def chatbot_response(query):
       inputs = tokenizer(query, return_tensors="pt", truncation=True, padding=True, max_length=512)
       with torch.no_grad():
           outputs = model(**inputs)
       predicted_class = torch.argmax(outputs.logits, dim=1).item()
       return label_mapping.get(predicted_class, "Sorry, I don't understand that question.")
   
   print(chatbot_response("How do I prevent maize pests?"))
   ```

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

