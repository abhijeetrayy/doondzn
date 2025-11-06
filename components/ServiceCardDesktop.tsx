import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Lightbulb, Target, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import React from 'react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
  features: string[];
}

export default function ServiceCardDesktop({ service }: { service: Service }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <motion.article
        whileHover={{ y: -4 }}
        onClick={() => setIsOpen(true)}
        className={`service-card ${service.gradient}`}
      >
        <div className="service-icon-container">
          <service.icon className="service-icon" />
        </div>
        <h3 className="service-title">{service.title}</h3>
        <p className="service-description">{service.description}</p>
        <div className="service-features">
          {service.features.slice(0, 4).map((f, i) => (
            <span key={i} className="feature-tag">
              {f}
            </span>
          ))}
        </div>
        <div className="service-learn-more">
          Learn more <ArrowRight className="learn-arrow" />
        </div>
      </motion.article>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`modal-header ${service.gradient}`} />
              <div className="modal-body">
                <div className="modal-top">
                  <div className="modal-info">
                    <div className={`modal-icon-container ${service.gradient}`}>
                      <service.icon className="modal-icon" />
                    </div>
                    <div>
                      <h3 className="modal-title">{service.title}</h3>
                      <p className="modal-description">{service.description}</p>
                    </div>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="modal-close">
                    <X className="close-icon" />
                  </button>
                </div>

                <div className="modal-grid">
                  <div>
                    <h4 className="modal-subtitle">
                      <Lightbulb className="subtitle-icon" /> Key Features
                    </h4>
                    <div className="features-list">
                      {service.features.map((f, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.03 }}
                          className="feature-item"
                        >
                          <CheckCircle className="feature-icon" />
                          <span>{f}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="modal-subtitle">
                      <Target className="subtitle-icon" /> Who It's For
                    </h4>
                    <div className="audience-list">
                      {[
                        { title: "Startups", desc: "Rapid MVP launches with scalable foundations" },
                        { title: "Enterprises", desc: "Enterprise-grade solutions with robust security" },
                        { title: "Agencies", desc: "White-label services for seamless client delivery" },
                      ].map((c, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 + 0.1 }}
                          className="audience-item"
                        >
                          <div className="audience-title">{c.title}</div>
                          <div className="audience-desc">{c.desc}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="modal-footer">
                  <div className="footer-text">
                    <div className="footer-title">Ready to get started?</div>
                    <div className="footer-desc">Let's discuss your project</div>
                  </div>
                  <button className="footer-button">
                    Contact Us
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}