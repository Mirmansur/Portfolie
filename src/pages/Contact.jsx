import { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

const telegramBotId = "7680163870:AAGAi8AJzVE8k3ZBXVX5vztb-iIXFF1fx3A";
const chatId = "1463986592";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    telegramUsername: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
      telegramUsername: "",
      phoneNumber: "",
    });
  };

  const sendTelegram = async (e) => {
    e.preventDefault();
    const fullMessage = `
      Ismi: ${formData.name}
      Email: ${formData.email}
      Username: ${formData.telegramUsername}
      Telefon raqami: ${formData.phoneNumber}
      Xabar: ${formData.message}
    `;

    const url = `https://api.telegram.org/bot${telegramBotId}/sendMessage`;

    try {
      const response = await axios.post(url, {
        chat_id: chatId,
        text: fullMessage,
      });
      console.log("Telegramga yuborildi:", response.data);
      clearForm();
    } catch (error) {
      console.error("Telegramga yuborishda xato:", error);
    }
  };

  return (
    <div
      id="contact"
      className="py-20 min-h-screen  text-white flex items-center justify-center"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white bg-opacity-10 p-10 rounded-2xl shadow-lg backdrop-blur-md">
          <h1 className="text-3xl font-extrabold text-center mb-6">
            {t("contact.Get in Touch")}
          </h1>
          <p className="text-center text-lg mb-8">
            {t("contact.Feel free to send me a message")}
          </p>
          <form onSubmit={sendTelegram} className="space-y-6">
            {[
              { label: "Your Name", name: "name", type: "text" },
              { label: "Your Email", name: "email", type: "email" },
              {
                label: "Telegram Username",
                name: "telegramUsername",
                type: "text",
              },
              { label: "Your Phone Number", name: "phoneNumber", type: "text" },
            ].map(({ label, name, type }) => (
              <div key={name}>
                <label className="block text-sm mb-1" htmlFor={name}>
                  {t(`contact.${label}`)}
                </label>
                <input
                  type={type}
                  id={name}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                  placeholder={t(`contact.${label}`)}
                />
              </div>
            ))}

            <div>
              <label className="block text-sm mb-1" htmlFor="message">
                {t("contact.Your Message")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                placeholder={t("contact.Enter your message")}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-white font-bold transition-all"
            >
              {t("contact.Send Message")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
