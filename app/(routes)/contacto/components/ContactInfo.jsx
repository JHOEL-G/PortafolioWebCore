import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Download,
  ExternalLink,
  Clock,
  Globe,
} from "lucide-react";
import { FaTiktok, FaFacebookF } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "yuniorjhoelgarcia@gmail.com",
      href: "mailto:hola@tudominio.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+51 951 072 293",
      href: "https://wa.me/51999888777",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Arequipa, Perú",
      href: "https://share.google/0YMnNap6b3AXwn588",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Clock,
      label: "Horario",
      value: "Lunes - Domingo, 8AM - 10PM",
      href: null,
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/tu-usuario",
      color: "hover:text-violet-700",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/tu-perfil",
      color: "hover:text-violet-700",
    },
    {
      icon: FaTiktok,
      label: "TikTok",
      href: "https://twitter.com/tu-usuario",
      color: "hover:text-violet-700",
    },
    {
      icon: FaFacebookF,
      label: "Facebook",
      href: "https://twitter.com/tu-usuario",
      color: "hover:text-violet-700",
    },
    {
      icon: Globe,
      label: "Portfolio",
      href: "https://tu-portfolio.com",
      color: "hover:text-violet-700",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          ¡Hablemos de tu{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            proyecto!
          </span>
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
          Estoy disponible para nuevos proyectos y colaboraciones. Comparte tus
          ideas y trabajemos juntos para crear algo increíble.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        {contactMethods.map((method, index) => {
          const IconComponent = method.icon;
          const content = (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0 + index * 0 }}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              whileHover={{ scale: 1.04 }}
            >
              <div
                className={`p-3 rounded-xl bg-gradient-to-r ${method.color} shadow-lg`}
              >
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-gray-400 text-sm font-medium">
                  {method.label}
                </p>
                <p className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                  {method.value}
                </p>
              </div>
              {method.href && (
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              )}
            </motion.div>
          );

          return method.href ? (
            <a
              key={method.label}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {content}
            </a>
          ) : (
            <div key={method.label}>{content}</div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <motion.a
          href="/Currículum Web - Jhoel Garcia Ladino.pdf"
          target="_blank"
          className="relative inline-flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold text-white overflow-hidden group"
          style={{
            background: "linear-gradient(90deg, #7c3aed, #2563eb)",
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(124, 58, 237, 0.6)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
          <Download className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
          Descargar CV
        </motion.a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="pt-8 border-t border-white/10"
      >
        <p className="text-gray-400 mb-4 font-medium">
          Sígueme en redes sociales
        </p>
        <div className="flex gap-4">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 ${social.color} transition-all duration-300 hover:bg-white/10 hover:border-white/20`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <IconComponent className="w-6 h-6" />
              </motion.a>
            );
          })}
        </div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute -z-10 top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -z-10 bottom-20 left-20 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />
    </motion.div>
  );
};

export default ContactInfo;
