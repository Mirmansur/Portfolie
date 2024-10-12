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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
    <div id="contact" className="Contact py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="contact flex flex-col items-center justify-center gap-12 mt-20">
          <div
            className="contact-one text-center"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1 className="font-sans font-extrabold text-4xl text-sky-400 mb-6">
              {t("contact.Get in Touch")}
            </h1>
            <p className="font-sans text-lg text-gray-400">
              {t("contact.Feel free to send me a message")}
            </p>
          </div>

          <div className="contact-form w-full max-w-lg bg-gray-800 p-8 rounded-xl">
            <form onSubmit={sendTelegram} className="flex flex-col gap-6">
              {/** Name Input */}
              <div>
                <label className="text-gray-400 block mb-2" htmlFor="name">
                  {t("contact.Your Name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder={t("contact.Enter your name")}
                />
              </div>

              {/** Email Input */}
              <div>
                <label className="text-gray-400 block mb-2" htmlFor="email">
                  {t("contact.Your Email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder={t("contact.Enter your email")}
                />
              </div>

              {/** Telegram Username Input */}
              <div>
                <label
                  className="text-gray-400 block mb-2"
                  htmlFor="telegramUsername"
                >
                  {t("contact.Telegram Username")}
                </label>
                <input
                  type="text"
                  id="telegramUsername"
                  name="telegramUsername"
                  value={formData.telegramUsername}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="@username"
                />
              </div>

              {/** Phone Number Input */}
              <div>
                <label
                  className="text-gray-400 block mb-2"
                  htmlFor="phoneNumber"
                >
                  {t("contact.Your Phone Number")}
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="+998 99 123 45 67"
                />
              </div>

              {/** Message Input */}
              <div>
                <label className="text-gray-400 block mb-2" htmlFor="message">
                  {t("contact.Your Message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder={t("contact.Enter your message")}
                ></textarea>
              </div>

              {/** Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-lg transition-colors"
              >
                {t("contact.Send Message")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
