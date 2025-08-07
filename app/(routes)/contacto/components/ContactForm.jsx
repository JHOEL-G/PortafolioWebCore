import React, { useState } from "react";

import { motion } from "framer-motion";

import {
  Send,
  User,
  Mail,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",

    email: "",

    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitStatus, setSubmitStatus] = useState(null);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido";
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = "El nombre debe tener al menos 2 caracteres";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Formato de email inválido";
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es requerido";
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.nombre,
          email: formData.email,
          message: formData.mensaje,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el mensaje");
      }

      setSubmitStatus("success");
      setFormData({ nombre: "", email: "", mensaje: "" });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },

    blur: { scale: 1, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative"
    >
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-white mb-2">
            Envíame un mensaje
          </h2>

          <p className="text-gray-300">Te responderé lo antes posible</p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <label className="flex block text-white font-medium mb-2 items-center gap-2">
              <User className="w-4 h-4" />
              Nombre Completo
            </label>

            <motion.div
              variants={inputVariants}
              whileFocus="focus"
              className="relative"
            >
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className={`w-full px-4 py-4 bg-white/10 border-2 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all duration-300 ${
                  errors.nombre ? "border-red-400" : "border-white/30"
                }`}
                placeholder="Tu nombre completo"
              />

              {errors.nombre && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm mt-1 flex items-center gap-1"
                >
                  <AlertCircle className="w-4 h-4" />

                  {errors.nombre}
                </motion.p>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <label className="block text-white font-medium mb-2 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Correo Electrónico
            </label>

            <motion.div
              variants={inputVariants}
              whileFocus="focus"
              className="relative"
            >
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-4 bg-white/10 border-2 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all duration-300 ${
                  errors.email ? "border-red-400" : "border-white/30"
                }`}
                placeholder="tu@email.com"
              />

              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm mt-1 flex items-center gap-1"
                >
                  <AlertCircle className="w-4 h-4" />

                  {errors.email}
                </motion.p>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <label className="block text-white font-medium mb-2 flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Mensaje
            </label>

            <motion.div
              variants={inputVariants}
              whileFocus="focus"
              className="relative"
            >
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-4 bg-white/10 border-2 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all duration-300 resize-none ${
                  errors.mensaje ? "border-red-400" : "border-white/30"
                }`}
                placeholder="Cuéntame sobre tu proyecto..."
              />

              {errors.mensaje && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm mt-1 flex items-center gap-1"
                >
                  <AlertCircle className="w-4 h-4" />

                  {errors.mensaje}
                </motion.p>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                isSubmitting
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/25"
              }`}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Enviar Mensaje
                </>
              )}
            </motion.button>
          </motion.div>
        </form>

        {/* Status Messages */}
        {submitStatus && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`mt-6 p-4 rounded-xl flex items-center gap-2 ${
              submitStatus === "success"
                ? "bg-green-500/20 border border-green-500/30 text-green-300"
                : "bg-red-500/20 border border-red-500/30 text-red-300"
            }`}
          >
            {submitStatus === "success" ? (
              <>
                <CheckCircle className="w-5 h-5" />
                ¡Mensaje enviado con éxito! Te responderé pronto.
              </>
            ) : (
              <>
                <AlertCircle className="w-5 h-5" />
                Error al enviar el mensaje. Inténtalo de nuevo.
              </>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ContactForm;
