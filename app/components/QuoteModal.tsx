"use client";

import { useState } from "react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState<{
    entreprise: string;
    telephone: string;
    services: string[];
    hebergement: string;
  }>({
    entreprise: "",
    telephone: "",
    services: [],
    hebergement: "SaaS",
  });

  // Gestion des changements dans le formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((s) => s !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Soumission du formulaire
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { entreprise, telephone, services, hebergement } = formData;
    const serviceText = services.length
      ? services.join(", ")
      : "Aucun service sélectionné";

    const whatsappNumber = `225${
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "0140003279"
    }`;
    const message = `🌟 *Demande de devis* 🌟%0A%0A
📌 *Informations du client:*%0A
🔹 *Entreprise:* ${entreprise}%0A
📞 *Téléphone:* ${telephone}%0A%0A
📌 *Services demandés:*%0A
${
  serviceText
    .split(", ")
    .map((service) => `✅ ${service}`)
    .join("%0A") || "❌ Aucun service sélectionné"
}%0A%0A
📌 *Hébergement:* ${hebergement}%0A%0A
📅 *Date:* ${new Date().toLocaleDateString()}%0A
🕒 *Heure:* ${new Date().toLocaleTimeString()}%0A%0A
✉️ *Merci de traiter cette demande rapidement.*`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-15 rounded-lg">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 transform transition-all">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Obtenez votre devis personnalisé
        </h2>
        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700">
            Nom de l&apos;entreprise
          </label>
          <input
            type="text"
            name="entreprise"
            value={formData.entreprise}
            onChange={handleChange}
            className="text-gray-900 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Votre entreprise"
            required
          />

          <label className="block text-gray-700 mt-3">
            Numéro de téléphone
          </label>
          <input
            type="tel"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            className="text-gray-900 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Votre numéro"
            required
          />

          <p className="text-gray-700 mb-2 mt-3">Je désire un(e):</p>
          <div className="mb-4 space-y-2">
            {["Application", "Site web", "Application mobile client"].map(
              (service) => (
                <label key={service} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="services"
                    value={service}
                    checked={formData.services.includes(service)}
                    onChange={handleChange}
                    className="form-checkbox text-gray-900"
                  />
                  <span className="text-gray-500">{service}</span>
                </label>
              )
            )}
          </div>

          {/* Hébergement */}
          <p className="text-gray-700 mb-2 mt-3">Je désire un hébergement :</p>
          <div className="mb-4 space-y-2">
            {["SaaS (serveur commun)", "Dédié (unique)"].map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="hebergement"
                  value={option}
                  checked={formData.hebergement === option}
                  onChange={handleChange}
                  className="form-radio text-gray-900"
                />
                <span className="text-gray-500">{option}</span>
              </label>
            ))}
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded-md"
              onClick={onClose}
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-red-500 text-white rounded-md"
            >
              Soumettre
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
