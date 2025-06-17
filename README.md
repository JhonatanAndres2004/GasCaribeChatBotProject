
# GasCaribe Chatbot

**🏆 2ND place of Hackathon IA Uninorte 2024**

---

## 📖 Project Description

**GasCaribe Chatbot** is a web-based AI assistant created for **Gases del Caribe** to help employees and users easily find answers related to environmental regulations, safety protocols, and internal management procedures.

This project was awarded as second best project at the **Hackathon IA Uninorte 2024** for its innovative use of **artificial intelligence** to process official documents and provide accurate, real-time answers.

🎥 **Demo video**: [Watch it here](https://youtu.be/mfTfPOk6OGM?feature=shared)

---

## 🚀 Main Features

1. **Smart Chatbot**
   - Powered by **Google's Gemini 1.5 Flash** language model.
   - Understands natural language questions and provides human-like responses.
   - Limited to only respond with information relevant to **Gases del Caribe**.

2. **PDF Document Integration**
   - Uses **PyPDF2** to extract text from internal company PDFs.
   - These documents act as the main knowledge base for the chatbot.

3. **User-Friendly Web Interface**
   - Built with **Flask (Python)** for the backend and **HTML/CSS/JavaScript** for the frontend.
   - Includes basic login (email and password) validation.
   - Two versions of the chatbot page included (one with QR code scanning).

4. **Conversation Logging**
   - Every user question and AI response is saved using **Firebase Realtime Database**.
   - Useful for tracking usage history and analytics.

5. **Quick Local Deployment**
   - Automatically opens the chatbot in your browser on startup.
   - Easy to customize and extend.

---

## 🤖 Artificial Intelligence Integration

- Uses the `google.generativeai` library to connect with **Gemini 1.5 Flash**.
- Each question is answered based on:
  1. A **system prompt** that limits the scope to company-specific topics.
  2. The **PDF content** extracted as context.
  3. The **chat history** to maintain coherent conversation.
- The response generation is fine-tuned using temperature, top-p, and token limits to balance creativity and reliability.

---

## 🛠️ Technologies Used

- **Backend**: Python, Flask  
- **AI Engine**: Google Generative AI (Gemini 1.5 Flash)  
- **PDF Processing**: PyPDF2  
- **Database**: Firebase Realtime Database  
- **Frontend**: HTML5, CSS3, JavaScript  
- **QR Code Scanner** (optional): html5-qrcode  
- **Auto-launch**: Opens `http://localhost:5000` automatically

---

## ⚙️ Installation & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/your_username/GasCaribe_Chatbot.git
   cd GasCaribe_Chatbot
   ```

2. **Create and activate virtual environment**
   ```bash
   python3 -m venv venv
   source venv/bin/activate        # macOS/Linux
   venv\Scripts\activate         # Windows
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure credentials**
   - Place your Firebase credentials file (`hackatonia2024-firebase-adminsdk.json`) inside the `Pagina_web/` folder.
   - Add your **Google Generative AI API Key** in `app.py`.

5. **Run the app**
   ```bash
   python Pagina_web/app.py
   ```

6. **Visit the app**
   - Your browser should open at `http://localhost:5000`
   - Login and start chatting with the AI assistant!

---

## 📁 Project Structure

```
GasCaribe_Chatbot/
├── Archivos Prueba/         # Prototypes and testing scripts
├── Información del Reto/    # Hackathon requirements and planning
├── Pagina_web/              # First web version
│   ├── app.py
│   ├── static/
│   └── templates/
├── Pagina_web2/             # Improved version with QR scanning
├── info.pdf                 # Main reference document
├── info1plus2.pdf           # Merged documents
└── README.md                # This file
```

---

## 🏅 Awards

- 🥇 **Winner - Hackathon IA Uninorte 2024**  
  Recognized for outstanding integration of AI in real-world company applications.

---

## 🙌 Author

Developed by **Jhonatan Maldonado and Andrés Fábregas**  
📫 Feel free to reach out for collaboration or improvements.
