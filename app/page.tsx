"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  Variants,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Sparkles,
  Code2,
  Palette,
  Zap,
  Globe,
  ShoppingBag,
  Search,
  Film,
  ArrowRight,
  Menu,
  X,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Star,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Play,
  Pause,
  Clock,
  Users,
  Target,
  CheckCircle,
  Lightbulb,
  Rocket,
  Heart,
  TrendingUp,
  Lock,
  Gauge,
  BarChart,
  ShieldCheck,
  DollarSign,
  Calendar,
  Headphones,
  ThumbsUp,
  AlertOctagon,
  AlertTriangle,
  ArrowUp,
  BarChart3,
  Shield,
  TrendingDown,
  Trophy,
} from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { createClient } from "@/supabase/client";

const cn = (...inputs: any[]) => twMerge(clsx(inputs));

// Initialize Supabase client (replace with your Supabase URL and anon key)
const supabase = createClient();

// === DATA ===
interface ServiceCard {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
  features: string[];
}
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  featured: boolean;
}
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}
interface FAQ {
  question: string;
  answer: string;
}
interface PricingPackage {
  title: string;
  price: string;
  approxPrice: string;
  description: string;
  features: string[];
  buttonText: string;
  isPopular: boolean;
  developmentTime: string;
}
interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  url: string;
}
export function ComparisonSection() {
  const rows = [
    {
      feature: "Coding Approach",
      us: "100% Hand-Coded",
      others: "Templates / Page Builders",
    },
    { feature: "PageSpeed", us: "100/100 Guaranteed", others: "60-80 Average" },
    {
      feature: "Support",
      us: "24/7 Dedicated Support",
      others: "Business Hours",
    },
    { feature: "Edits", us: "Unlimited Included", others: "Extra Fees" },
  ];
  return (
    <section className="py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto overflow-x-auto">
        <table className="w-full text-left border-collapse bg-white rounded-3xl overflow-hidden shadow-lg">
          <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <tr>
              <th className="p-4 font-bold text-lg">Feature</th>
              <th className="p-4 font-bold text-lg">Doondzn</th>
              <th className="p-4 font-bold text-lg">Typical Agency</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className={clsx(
                  "border-b border-gray-200",
                  i % 2 === 0 ? "bg-gray-50" : "bg-white"
                )}
              >
                <td className="p-4 font-bold text-gray-900">{row.feature}</td>
                <td className="p-4 text-green-600 font-bold ">
                  <CheckCircle className="w-4 h-4 mr-2 inline-block" />
                  <span className="inline-block">{row.us}</span>
                </td>
                <td className="p-4 text-red-600 ">
                  <AlertTriangle className="w-4 h-4 mr-2 inline-block" />
                  <span className="inline-block">{row.others}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
const services: ServiceCard[] = [
  {
    icon: Code2,
    title: "Custom Web Design & Development",
    description:
      "Hand-coded websites using React, Next.js, and modern frameworks. No templates, no page builders - pure custom code for superior performance and results.",
    gradient: "from-indigo-500 to-blue-600",
    features: [
      "Mobile-First Design",
      "Hand-Coded HTML/CSS/JS",
      "No WordPress Bloat",
      "Custom CMS Options",
      "E-commerce Integration",
      "API Development",
      "Progressive Web Apps",
      "Conversion Optimization",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Intuitive designs focused on user experience, mobile responsiveness, and turning visitors into paying customers.",
    gradient: "from-purple-500 to-pink-500",
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Custom Design Systems",
      "A/B Testing",
      "Heatmap Analysis",
      "User Flow Optimization",
      "Accessibility Compliance",
      "Brand Integration",
    ],
  },
  {
    icon: Sparkles,
    title: "Brand Identity",
    description:
      "Complete branding packages including logos, guidelines, and visual elements that make your business memorable and trustworthy.",
    gradient: "from-pink-500 to-rose-500",
    features: [
      "Logo Creation",
      "Brand Strategy",
      "Visual Guidelines",
      "Marketing Collateral",
      "Social Media Assets",
      "Business Card Design",
      "Email Signatures",
      "Packaging Design",
    ],
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Solutions",
    description:
      "High-performance online stores with secure payments, inventory management, and features to maximize sales and repeat business.",
    gradient: "from-emerald-500 to-teal-500",
    features: [
      "Shopify/Custom Stores",
      "Payment Gateways",
      "Inventory Sync",
      "Abandoned Cart Recovery",
      "Product Recommendations",
      "SEO Optimization",
      "Analytics Integration",
      "Mobile Commerce",
    ],
  },
  {
    icon: Zap,
    title: "Backend Development",
    description:
      "Robust backend systems using Node.js, Supabase, Firebase for secure, scalable applications that grow with your business.",
    gradient: "from-orange-500 to-red-500",
    features: [
      "REST/GraphQL APIs",
      "Database Architecture",
      "Cloud Deployment",
      "Security Implementation",
      "Performance Tuning",
      "CI/CD Pipelines",
      "Data Migration",
      "Third-Party Integrations",
    ],
  },
  {
    icon: Search,
    title: "SEO & Performance Optimization",
    description:
      "Sites built for speed and search engines, ensuring high rankings, fast loads, and more organic traffic leading to revenue growth.",
    gradient: "from-cyan-500 to-blue-500",
    features: [
      "On-Page SEO",
      "Technical SEO",
      "Core Web Vitals",
      "Speed Optimization",
      "Local SEO",
      "Content Strategy",
      "Link Building",
      "Analytics & Reporting",
    ],
  },
  {
    icon: Film,
    title: "Video & Motion Graphics",
    description:
      "Professional video content and animations that engage visitors and boost conversion rates across your digital presence.",
    gradient: "from-rose-500 to-pink-500",
    features: [
      "Video Production",
      "Motion Graphics",
      "Explainer Videos",
      "Social Media Reels",
      "Product Demos",
      "Testimonial Videos",
      "Animation Sequences",
      "Editing & Effects",
    ],
  },
];
const projects: Project[] = [
  {
    id: 1,
    title: "Buildmypc.in",
    category: "B2C E-commerce",
    description:
      "Comprehensive B2C platform for computer hardware sales with advanced search, inventory management, and payment integrations.",
    image: "/image2.png",
    technologies: ["Next.js", "React", "Razorpay", "PhonePe"],
    liveUrl: "https://Buildmypc.in",
    featured: true,
  },
  {
    id: 2,
    title: "BestComputer.co.in",
    category: "B2B Platform",
    description:
      "B2B marketplace for computer products with wholesale pricing, bulk ordering, and business analytics.",
    image: "/image1.png",
    technologies: ["React", "Node.js", "MongoDB", "JustPay"],
    liveUrl: "https://bestcomputer.co.in",
    featured: true,
  },
  {
    id: 3,
    title: "CRM and CMS Development",
    category: "Enterprise Software",
    description:
      "Custom CRM and CMS system for efficient customer management and content handling with seamless integration.",
    image:
      "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=800&q=80",
    technologies: ["Next.js", "Supabase", "GraphQL"],
    liveUrl: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Inventory Management System",
    category: "E-commerce Tools",
    description:
      "Multi-channel inventory management system synchronizing stock across platforms with real-time updates.",
    image:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=80",
    technologies: ["Node.js", "PostgreSQL", "AWS"],
    liveUrl: "#",
    featured: true,
  },
  {
    id: 5,
    title: "SEO with Data Analytics",
    category: "Digital Marketing",
    description:
      "Advanced SEO implementation with data-driven analytics for improved search rankings and performance tracking.",
    image:
      "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=800&q=80",
    technologies: ["Next.js", "Google Analytics", "SEO Tools"],
    liveUrl: "#",
    featured: true,
  },
  {
    id: 6,
    title: "Payment Integration System",
    category: "FinTech Integration",
    description:
      "Secure payment gateway integrations with Razorpay, PhonePe, and JustPay for seamless transactions.",
    image: "/image3.png",
    technologies: ["Razorpay API", "PhonePe API", "JustPay API"],
    liveUrl: "#",
    featured: true,
  },
];
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael M.",
    role: "Owner",
    company: "Construction Firm",
    content:
      "Doondzn provided unbeatable value. Our site loads instantly and conversions tripled. Ryan's responsiveness is unmatched.",
    rating: 5,
    avatar: "/api/placeholder/100/100",
  },
  {
    id: 2,
    name: "Clark P.",
    role: "Business Owner",
    company: "Service Company",
    content:
      "The process was fun and exciting. Quick responses and perfect execution. Will use again for future projects.",
    rating: 5,
    avatar: "/api/placeholder/100/100",
  },
  {
    id: 3,
    name: "Scott S.",
    role: "Marketing Director",
    company: "Tech Startup",
    content:
      "Delivered exactly our vision with a faster site and clean design. Exceptional results in speed and SEO.",
    rating: 5,
    avatar: "/api/placeholder/100/100",
  },
  {
    id: 4,
    name: "James Kim",
    role: "CTO",
    company: "FinTech Solutions",
    content:
      "Technical excellence combined with creative design. Doondzn delivered a robust backend system that scales beautifully while maintaining an intuitive user interface.",
    rating: 5,
    avatar: "/api/placeholder/100/100",
  },
  {
    id: 5,
    name: "Laura Patel",
    role: "CEO",
    company: "EcomBoost",
    content:
      "Our new Next.js site loads in under a second and has doubled our conversions. Doondzn's guarantee gave us confidence, and they delivered results in just 15 days!",
    rating: 5,
    avatar: "/api/placeholder/100/100",
  },
];
const faqs: FAQ[] = [
  {
    question: "How long does a typical website project take?",
    answer:
      "Standard 5-page sites take 7-14 days. Larger projects or e-commerce can take 20-60 days depending on scope. We provide detailed timelines upfront.",
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer:
      "Yes, all plans include unlimited edits, 24/7 support, hosting, and lifetime updates. No extra fees for changes.",
  },
  {
    question: "What makes your sites faster than competitors?",
    answer:
      "We hand-code everything with no bloat. Average load time under 1 second, 100/100 PageSpeed scores guaranteed.",
  },
  {
    question: "Can you handle e-commerce or custom features?",
    answer:
      "Absolutely. We build custom Shopify stores, integrate apps, and create bespoke features as needed.",
  },
  {
    question: "What if I'm not satisfied with the design?",
    answer:
      "Unlimited revisions until you're 100% happy. Plus our money-back guarantee if we can't deliver.",
  },
  {
    question: "Do you provide SEO or advertising services?",
    answer:
      "Yes, we have in-house experts for local SEO, content strategy, and Google Ads management with proven results.",
  },
];
const pricingPackages: PricingPackage[] = [
  {
    title: "STANDARD",
    price: "₹0 Down",
    approxPrice: "₹14,700/mo",
    description: "Perfect for small businesses getting started",
    features: [
      "Custom Hand-Coded Design",
      "Up to 5 Pages",
      "Mobile-First Responsive",
      "100/100 PageSpeed",
      "Basic SEO Setup",
      "Unlimited Edits",
      "24/7 Support",
      "Free Hosting & SSL",
      "Contact Forms",
      "Social Integration",
      "Analytics Setup",
      "Lifetime Updates",
    ],
    buttonText: "Get Started Today",
    isPopular: false,
    developmentTime: "7-14 days delivery",
  },
  {
    title: "PREMIUM",
    price: "₹0 Down",
    approxPrice: "₹21,000/mo",
    description: "Advanced features for growing businesses",
    features: [
      "All Standard Features",
      "Up to 12 Pages",
      "Advanced SEO",
      "Blog Integration",
      "Custom Animations",
      "E-commerce Ready",
      "API Integrations",
      "Performance Tuning",
      "A/B Testing Setup",
      "Priority Support",
      "Monthly Reports",
      "Security Monitoring",
    ],
    buttonText: "Get Started Today",
    isPopular: true,
    developmentTime: "14-30 days delivery",
  },
  {
    title: "ENTERPRISE",
    price: "Custom",
    approxPrice: "Starting ₹6,72,000",
    description: "Full-scale solutions for larger operations",
    features: [
      "All Premium Features",
      "Unlimited Pages",
      "Custom E-commerce",
      "Advanced CMS",
      "Multi-Language",
      "App Integrations",
      "Dedicated Team",
      "Ongoing Optimization",
      "Google Ads Setup",
      "Full SEO Package",
      "Training Sessions",
      "24/7 Monitoring",
    ],
    buttonText: "Schedule Consultation",
    isPopular: false,
    developmentTime: "20-60 days delivery",
  },
];
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Why Hand-Coded Sites Beat WordPress Every Time",
    date: "Oct 15, 2025",
    category: "Web Development",
    excerpt:
      "Discover how custom coding leads to faster, more secure sites without the bloat.",
    url: "#",
  },
  {
    id: 2,
    title: "Maximizing ROI with Google Ads for Small Businesses",
    date: "Oct 1, 2025",
    category: "Marketing",
    excerpt: "Proven strategies to get more customers with efficient ad spend.",
    url: "#",
  },
  {
    id: 3,
    title: "Core Web Vitals: Why Speed Matters for SEO",
    date: "Sep 20, 2025",
    category: "SEO",
    excerpt:
      "How optimizing your site speed can boost rankings and conversions.",
    url: "#",
  },
];
// === ANIMATIONS ===
const cardContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};
const cardItem: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 28 },
  },
};
const navItem: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// Assuming ServiceCard type is defined elsewhere


// ContactModal component extracted outside
const ContactModal = ({ onClose }: { onClose: () => void }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      // Simulate API call (replace with actual fetch if needed)
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSuccess(true);
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
      alert('Message sent successfully! We\'ll get back to you soon.');
    } catch {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 border border-gray-300 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gradient Header */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Contact Us
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mb-6 text-center text-sm">
          Fill out the form below, and we'll get back to you within 24 hours.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div className="relative">
            <label className="absolute -top-3 left-4 bg-white px-2 text-sm font-medium text-gray-700 transition-all">
              Name *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              required
              aria-required="true"
            />
          </div>

          {/* Phone Input */}
          <div className="relative">
            <label className="absolute -top-3 left-4 bg-white px-2 text-sm font-medium text-gray-700 transition-all">
              Phone
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your phone number (optional)"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <label className="absolute -top-3 left-4 bg-white px-2 text-sm font-medium text-gray-700 transition-all">
              Email *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              required
              aria-required="true"
            />
          </div>

          {/* Message Textarea */}
          <div className="relative">
            <label className="absolute -top-3 left-4 bg-white px-2 text-sm font-medium text-gray-700 transition-all">
              Message *
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your project or inquiry..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
              required
              aria-required="true"
            />
          </div>

          {/* Error/Success */}
          {error && (
            <p className="text-red-600 text-sm text-center">{error}</p>
          )}
          {success && (
            <p className="text-green-600 text-sm text-center">
              Message sent successfully! We'll contact you soon.
            </p>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

const ServiceCardDesktop = ({
  service,
  index,
}: {
  service: ServiceCard;
  index: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <motion.article
        variants={cardItem}
        onClick={() => setIsOpen(true)}
        className={cn(
          "group relative bg-white rounded-3xl p-6 cursor-pointer",
          "border border-gray-200 shadow-lg transition-all duration-400",
          "hover:shadow-2xl hover:-translate-y-1 hover:border-indigo-400",
          "min-h-[320px] flex flex-col justify-between"
        )}
      >
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity">
          <div
            className={cn(
              "absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl",
              service.gradient
            )}
          />
        </div>
        <div
          className={cn(
            "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 shadow-md",
            service.gradient
          )}
        >
          <service.icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {service.title}
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
          {service.description}
        </p>
        <div className="mt-auto pt-4">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {service.features.slice(0, 3).map((f, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-semibold"
              >
                {f}
              </span>
            ))}
            {service.features.length > 3 && (
              <span className="px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-semibold">
                +{service.features.length - 3}
              </span>
            )}
          </div>
          <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:text-indigo-700">
            Learn more{" "}
            <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </motion.article>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-300"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={cn(
                  "h-1 bg-gradient-to-r rounded-t-3xl",
                  service.gradient
                )}
              />
              <div className="p-8 md:p-12">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center space-x-4">
                    <div
                      className={cn(
                        "w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center shadow-lg",
                        service.gradient
                      )}
                    >
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 mt-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <Lightbulb className="w-5 h-5 mr-2 text-indigo-600" /> Key
                      Features
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((f, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-center space-x-3 text-gray-700"
                        >
                          <CheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                          <span>{f}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-purple-600" />{" "}
                      Benefits
                    </h4>
                    <div className="space-y-3">
                      {[
                        {
                          title: "Performance",
                          desc: "Lightning-fast loads for better user experience and SEO",
                        },
                        {
                          title: "Security",
                          desc: "Hand-coded with no vulnerabilities from plugins",
                        },
                        {
                          title: "Scalability",
                          desc: "Built to grow with your business needs",
                        },
                      ].map((c, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 + 0.2 }}
                          className="p-4 bg-indigo-50 rounded-xl border border-indigo-200"
                        >
                          <div className="font-bold text-gray-900">
                            {c.title}
                          </div>
                          <div className="text-sm text-gray-700 mt-0.5">
                            {c.desc}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-10 pt-8 border-t border-gray-300 flex items-center justify-between"
                >
                  <div>
                    <div className="text-lg font-bold text-gray-900">
                      Ready to transform your online presence?
                    </div>
                    <div className="text-sm text-gray-700">
                      Schedule a free consultation today
                    </div>
                  </div>
                  <motion.button
                    onClick={() => {
                      setIsContactOpen(true);
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg"
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isContactOpen && <ContactModal onClose={() => setIsContactOpen(false)} />}
      </AnimatePresence>
    </>
  );
};
// === MOBILE CAROUSEL ===
const ServiceCarouselMobile = ({ services }: { services: ServiceCard[] }) => {
  const [index, setIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const handleSwipe = (direction: "left" | "right") => {
    if (direction === "left") setIndex((i) => (i + 1) % services.length);
    if (direction === "right")
      setIndex((i) => (i - 1 + services.length) % services.length);
  };
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-3xl">
        <motion.div
          animate={{ x: `-${index * 100}%` }}
          transition={{ type: "spring", stiffness: 280, damping: 32 }}
          className="flex"
          onTouchStart={(e) => setStartX(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            const diff = startX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) handleSwipe(diff > 0 ? "left" : "right");
          }}
        >
          {services.map((s, i) => (
            <div key={i} className="w-full flex-shrink-0 p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200"
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 shadow-md",
                    s.gradient
                  )}
                >
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {s.description}
                </p>
                <div className="space-y-2 mb-5">
                  {s.features.slice(0, 3).map((f, j) => (
                    <div
                      key={j}
                      className="flex items-center space-x-2 text-sm text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 text-indigo-600" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold shadow-md hover:bg-indigo-700 transition-colors">
                  Learn More
                </button>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="flex justify-center space-x-2 mt-6">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === i ? "bg-indigo-600 w-6" : "bg-gray-400"
            )}
          />
        ))}
      </div>
    </div>
  );
};
// === PRICING CARD ===
const PricingCard = ({
  pkg,
  index,
}: {
  pkg: PricingPackage;
  index: number;
}) => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (<>
    <motion.div
      variants={cardItem}
      className={cn(
        "relative bg-white rounded-3xl p-8 border-2 shadow-xl transition-all duration-400",
        pkg.isPopular ? "border-indigo-500" : "border-gray-300"
      )}
      >
      {pkg.isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-sm font-bold shadow-lg">
          BEST VALUE
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
      <div className="text-3xl font-bold text-indigo-600 mb-1">{pkg.price}</div>
      <div className="text-sm text-gray-700 mb-4">{pkg.approxPrice}</div>
      <p className="text-gray-700 text-sm mb-6">{pkg.description}</p>
      <ul className="space-y-3 mb-8">
        {pkg.features.map((f, i) => (
          <li
            key={i}
            className="flex items-center space-x-3 text-sm text-gray-700"
          >
            <CheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <button onClick={() => setIsContactOpen(true)} className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all">
        {pkg.buttonText}
      </button>
      <p className="text-xs text-gray-600 mt-4 text-center">
        {pkg.developmentTime}
      </p>
    </motion.div>
    <AnimatePresence>
        {isContactOpen && <ContactModal onClose={() => setIsContactOpen(false)} />}
      </AnimatePresence>
      </>
  );
};
// === BLOG CARD ===
const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <motion.article
      variants={cardItem}
      className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-400 border border-gray-200"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={`/api/placeholder/600/338?text=${post.title}`}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-2 text-sm text-gray-600">
          <span>{post.date}</span>
          <span>•</span>
          <span className="font-semibold text-indigo-600">{post.category}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <a
          href={post.url}
          className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700"
        >
          Read More <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>
    </motion.article>
  );
};
export default function DoondznAgency() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const { scrollYProgress } = useScroll();
  const heroRef = useRef<HTMLDivElement>(null);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const [heroRefIv, heroInView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  const [servicesRefIv, servicesInView] = useInView({
    threshold: 0.15,
    triggerOnce: false,
  });
  const [projectsRefIv, projectsInView] = useInView({
    threshold: 0.15,
    triggerOnce: false,
  });
  const [testimonialsRefIv, testimonialsInView] = useInView({
    threshold: 0.15,
    triggerOnce: false,
  });
  const [approachRefIv, approachInView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  const [faqRefIv, faqInView] = useInView({
    threshold: 0.15,
    triggerOnce: false,
  });
  const [guaranteeRefIv, guaranteeInView] = useInView({
    threshold: 0.15,
    triggerOnce: false,
  });
  const [whyNextRefIv, whyNextInView] = useInView({
    threshold: 0.15,
    triggerOnce: false,
  });
  const [howWeWorkRefIv, howWeWorkInView] = useInView({
    threshold: 0.15,
    triggerOnce: false,
  });
  const [conversionsRefIv, conversionsInView] = useInView({
    threshold: 0.15,
    triggerOnce: false,
  });
  const [pricingRefIv, pricingInView] = useInView({
    threshold: 0.15,
    triggerOnce: false,
  });
  const [comparisonRefIv, comparisonInView] = useInView({
    threshold: 0.15,
    triggerOnce: false,
  });
  const [valuesRefIv, valuesInView] = useInView({
    threshold: 0.15,
    triggerOnce: false,
  });
  const [blogRefIv, blogInView] = useInView({
    threshold: 0.15,
    triggerOnce: false,
  });
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) {
      setError("Please fill in both fields.");
      return;
    }
    setLoading(true);
    setError(null);
    const { error } = await supabase
      .from("contactus")
      .insert([{ email, message }]);
    setLoading(false);
    if (error) {
      setError("Failed to submit. Please try again.");
    } else {
      setSuccess(true);
      setEmail("");
      setMessage("");
      setTimeout(() => setIsContactOpen(false), 2000);
    }
  };

  return (
    <>
      {/* BACKGROUND */}
      
      <div className="fixed inset-0 -z-10 overflow-hidden bg-gray-50">
        <motion.div className="absolute inset-0 opacity-10" style={{ y }}>
          <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-200 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-60 right-0 w-80 h-80 bg-purple-200 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute bottom-0 left-60 w-80 h-80 bg-blue-200 rounded-full blur-3xl animate-pulse delay-500" />
        </motion.div>
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(99,102,241,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>
      {/* NAVIGATION */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-300 shadow-lg"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-1 sm:space-y-0">
            
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <span className="flex items-center text-gray-800">
                <svg
                  className="w-3 h-3 mr-1 text-blue-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                contact@doondzn.com
              </span>
              <span className="flex items-center text-gray-800">
                <svg
                  className="w-3 h-3 mr-1 text-blue-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Conatact Us: +91 8077688145
              </span>
             
            </div>
          </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Doondzn</span>
          </motion.div>
          <motion.div
            variants={cardContainer}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex items-center space-x-8"
          >
            {[
              "Services",
              "Portfolio",
              "Testimonials",
              "Approach",
              "Pricing",
             
              "FAQ",
            ].map((item) => (
              <motion.a
                key={item}
                variants={navItem}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="text-gray-800 hover:text-indigo-600 font-semibold relative group text-sm"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            <motion.button
              onClick={() => setIsContactOpen(true)}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 4px 16px rgba(99,102,241,0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-bold text-sm shadow-lg"
            >
              Get Started
            </motion.button>
          </motion.div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-1 text-gray-800"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>
      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center space-y-8 p-8"
          >
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-1 sm:space-y-0">
            
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <span className="flex items-center text-gray-800">
                <svg
                  className="w-3 h-3 mr-1 text-blue-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                contact@doondzn.com
              </span>
              <span className="flex items-center text-gray-800">
                <svg
                  className="w-3 h-3 mr-1 text-blue-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Conatact Us: +91 8077688145
              </span>
             
            </div>
          </div>
            {[
              "Services",
              "Portfolio",
              "Testimonials",
              "Approach",
              "Pricing",
              
              "FAQ",
            ].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-bold text-gray-900"
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              onClick={() => setIsContactOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-bold"
            >
              Get Started
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      {/* HERO */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden pt-20"
      >
        <motion.div
          ref={heroRefIv}
          style={{ opacity }}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center px-4 py-1.5 bg-indigo-100 rounded-full text-sm font-bold text-indigo-800 mb-6 shadow-md"
            >
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse mr-2" />
              <span>Top Agency • Custom Hand-Coded Sites</span>
            </motion.div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6 text-gray-900">
              Custom Websites That Drive Revenue{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Without The Bloat
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              No WordPress, no page builders. 100% hand-coded sites with
              1-second loads, perfect PageSpeed scores, and proven results for
              small businesses across the US.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <motion.button
                onClick={() => setIsContactOpen(true)}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 4px 16px rgba(99,102,241,0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-bold flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
              <motion.button
                onClick={() => setIsContactOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-lg font-bold bg-white hover:bg-indigo-50 transition-colors"
              >
                Schedule Free Call
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {[
                { num: "200+", label: "Happy Clients" },
                { num: "100/100", label: "PageSpeed Scores" },
                { num: "15 Days", label: "Average ROI" },
                { num: "24/7", label: "US-Based Support" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-indigo-600">
                    {s.num}
                  </div>
                  <div className="text-sm text-gray-700 mt-1 font-medium">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      {/* SERVICES */}
      <section id="services" ref={servicesRefIv} className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={servicesInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center px-4 py-1.5 bg-indigo-100 text-indigo-800 rounded-full text-sm font-bold mb-4 shadow-md"
            >
              <Sparkles className="w-4 h-4 mr-1.5" />
              Our Expertise
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              What We Offer
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Hand-crafted solutions for small businesses. From custom designs
              to SEO and ads - we handle it all with US-based expertise.
            </p>
          </motion.div>
          <motion.div
            variants={cardContainer}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            className="hidden lg:grid grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {services.map((s, i) => (
              <ServiceCardDesktop key={i} service={s} index={i} />
            ))}
          </motion.div>
          <div className="lg:hidden">
            <ServiceCarouselMobile services={services} />
          </div>
        </div>
      </section>
      {/* HOW WE WORK */}
      <section
        id="how-we-work"
        ref={howWeWorkRefIv}
        className="py-24 px-4 sm:px-6 bg-gray-100"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={howWeWorkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Our Process
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Simple, transparent, and results-focused. From concept to launch
              and beyond.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery Call",
                desc: "We discuss your vision, goals, and requirements to create a tailored plan.",
                features: [
                  "Business Analysis",
                  "Competitor Review",
                  "Scope Definition",
                ],
                icon: Calendar,
              },
              {
                step: "02",
                title: "Design & Build",
                desc: "Custom design and hand-coding with regular feedback and revisions.",
                features: ["Wireframes", "Custom Development", "Testing"],
                icon: Code2,
              },
              {
                step: "03",
                title: "Launch & Grow",
                desc: "Go live with ongoing support, optimization, and marketing integration.",
                features: [
                  "SEO Setup",
                  "Ads Management",
                  "Performance Monitoring",
                ],
                icon: Rocket,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={howWeWorkInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl flex items-center justify-center mb-4 font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-700 mb-4">{item.desc}</p>
                <ul className="space-y-2">
                  {item.features.map((f, j) => (
                    <li
                      key={j}
                      className="flex items-center space-x-2 text-sm text-gray-700"
                    >
                      <item.icon className="w-4 h-4 text-indigo-600" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CONVERSIONS */}
      <section
        id="conversions"
        ref={conversionsRefIv}
        className="py-24 px-4 sm:px-6 bg-gradient-to-br from-white to-blue-50/30"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={conversionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              Results That Matter
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
              Sites Built to Convert and Perform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hand-coded for speed and efficiency. Our clients see average{" "}
              <span className="font-bold text-blue-600">
                340% conversion increases
              </span>{" "}
              with sites that load in under 1 second.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={conversionsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    340% Conversion Boost
                  </h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Custom designs optimized for user psychology, fast loads, and
                  seamless experiences that turn browsers into buyers.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Mobile-first approach with perfect responsiveness",
                    "Strategic CTAs and trust elements",
                    "Data-driven optimizations",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full text-sm font-semibold text-blue-700 shadow-sm">
                      <ArrowUp className="w-4 h-4" />
                      Typical Results
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                      <div className="font-semibold text-gray-700">Before</div>
                      <div className="font-bold text-red-500">
                        2.3% Conversion
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                      <div className="font-semibold text-gray-700">After</div>
                      <div className="font-bold text-green-600">
                        10.1% Conversion
                      </div>
                    </div>
                    <div className="text-center pt-2">
                      <div className="text-2xl font-bold text-blue-600">
                        +340% Growth
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        In customer acquisition
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={conversionsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <DollarSign className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    15-Day ROI
                  </h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Sites that pay for themselves quickly through increased leads,
                  sales, and efficiency.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Instant lead generation",
                    "Lower bounce rates",
                    "Higher search rankings",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-purple-50 transition-colors"
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full text-sm font-semibold text-purple-700 shadow-sm">
                      <TrendingUp className="w-4 h-4" />
                      Client Success
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                      <div className="font-semibold text-gray-700">
                        Investment
                      </div>
                      <div className="font-bold text-gray-900">₹3,52,800</div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                      <div className="font-semibold text-gray-700">
                        First Month Revenue
                      </div>
                      <div className="font-bold text-green-600">₹13,10,400</div>
                    </div>
                    <div className="text-center pt-2">
                      <div className="text-2xl font-bold text-purple-600">
                        371% ROI
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        In 30 days
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* WHY NEXT.JS */}
      <section
        id="why-next"
        ref={whyNextRefIv}
        className="py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whyNextInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-gray-600 rounded-full animate-pulse"></div>
              Technology Edge
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-indigo-600 bg-clip-text text-transparent">
              Hand-Coded vs. WordPress Bloat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Custom code for enterprise-level performance{" "}
              <span className="font-semibold text-indigo-600">
                without the vulnerabilities or slow loads
              </span>
              .
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={whyNextInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-indigo-200 hover:border-indigo-300 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-indigo-100 rounded-xl">
                    <Code2 className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Hand-Coded Next.js
                    </h3>
                    <p className="text-indigo-600 font-semibold">
                      Superior Performance
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Pure code, no plugins, built for speed and security like
                  Fortune 500 sites.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Blazing Speed",
                      desc: "<1s loads • 100/100 PageSpeed • Optimal Core Vitals",
                      icon: Zap,
                    },
                    {
                      title: "Ironclad Security",
                      desc: "No plugins to hack • Static generation • Enterprise-grade protection",
                      icon: Lock,
                    },
                    {
                      title: "SEO Mastery",
                      desc: "Built-in optimization • Faster indexing • Higher rankings",
                      icon: Search,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-4 rounded-xl bg-indigo-50/50 hover:bg-indigo-50 transition-colors"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm border border-indigo-100">
                        <item.icon className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={whyNextInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-red-200 hover:border-red-300 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-red-100 rounded-xl">
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      WordPress Sites
                    </h3>
                    <p className="text-red-600 font-semibold">
                      Common Pitfalls
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Outdated architecture with plugins that slow down and create
                  security risks.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Slow Performance",
                      desc: "3+s loads • 50-70/100 scores • High bounce rates",
                      icon: Clock,
                    },
                    {
                      title: "Security Risks",
                      desc: "Constant hacks • Plugin vulnerabilities • Maintenance nightmares",
                      icon: AlertOctagon,
                    },
                    {
                      title: "SEO Challenges",
                      desc: "Speed penalties • Bloat affects rankings • Update issues",
                      icon: TrendingDown,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-4 rounded-xl bg-red-50/50 hover:bg-red-50 transition-colors"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm border border-red-100">
                        <item.icon className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whyNextInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Performance Comparison
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Load Time",
                  next: "<1s",
                  wp: "3+s",
                  diff: "3x Faster",
                  nextColor: "text-green-600",
                  wpColor: "text-red-600",
                },
                {
                  title: "PageSpeed Score",
                  next: "100/100",
                  wp: "60/100",
                  diff: "+67% Better",
                  nextColor: "text-green-600",
                  wpColor: "text-red-600",
                },
                {
                  title: "Security Incidents",
                  next: "0%",
                  wp: "High Risk",
                  diff: "Hack-Proof",
                  nextColor: "text-green-600",
                  wpColor: "text-red-600",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="font-bold text-lg mb-4 text-gray-900 text-center">
                    {item.title}
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <div className="font-semibold text-gray-700">
                        Custom Code
                      </div>
                      <div className={`font-bold ${item.nextColor}`}>
                        {item.next}
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                      <div className="font-semibold text-gray-700">
                        WordPress
                      </div>
                      <div className={`font-bold ${item.wpColor}`}>
                        {item.wp}
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4 pt-4 border-t border-gray-200">
                    <div className="text-lg font-bold text-indigo-600">
                      {item.diff}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whyNextInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold mb-12 text-gray-900">
              Business Impact
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: BarChart3,
                  title: "+340% Conversions",
                  desc: "Faster sites mean more engagement and sales",
                  color: "text-blue-600",
                  bg: "bg-blue-50",
                },
                {
                  icon: Trophy,
                  title: "Top Rankings",
                  desc: "SEO advantages for more organic traffic",
                  color: "text-green-600",
                  bg: "bg-green-50",
                },
                {
                  icon: DollarSign,
                  title: "Quick ROI",
                  desc: "Payback in weeks, not months",
                  color: "text-purple-600",
                  bg: "bg-purple-50",
                },
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 h-full">
                    <div
                      className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <div className="font-bold text-xl text-gray-900 mb-3">
                      {item.title}
                    </div>
                    <div className="text-gray-600 leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* PORTFOLIO */}
      <section
        id="portfolio"
        ref={projectsRefIv}
        className="py-24 px-4 sm:px-6 bg-gray-100"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Our Portfolio
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Real results for real businesses. See how we've helped clients
              across industries grow.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                variants={cardItem}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-400 border border-gray-200"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-top-left object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-3 py-1 bg-white/90 rounded-full text-xs font-bold text-gray-800">
                      {p.category}
                    </span>
                    <a
                      href={p.liveUrl}
                      className="p-2 bg-white/90 rounded-full shadow-md hover:bg-white"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-800" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.liveUrl}
                    className="block py-3 bg-indigo-600 text-white rounded-xl font-bold text-center hover:bg-indigo-700 transition-colors"
                  >
                    View Site
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* APPROACH */}
      <section id="approach" ref={approachRefIv} className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={approachInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Our Approach
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Partner-focused process delivering measurable growth and long-term
              success.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Client-Centric",
                desc: "We build lasting partnerships, not just websites.",
              },
              {
                icon: Code2,
                title: "Quality Code",
                desc: "Hand-crafted for performance and reliability.",
              },
              {
                icon: Rocket,
                title: "Results-Driven",
                desc: "Focused on ROI and business growth.",
              },
              {
                icon: Users,
                title: "Best Team",
                desc: "Expert developers working remotely across the US.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardItem}
                className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200 text-center"
              >
                <item.icon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* TESTIMONIALS */}
      {/* <section
        id="testimonials"
        ref={testimonialsRefIv}
        className="py-24 px-4 sm:px-6 bg-gray-100"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Client Success Stories
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Hear from businesses we've helped grow across the US.
            </p>
          </motion.div>
          <motion.div
            variants={cardContainer}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.id}
                variants={cardItem}
                className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{t.content}"</p>
                <div className="flex items-center space-x-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full border-2 border-indigo-600"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-600">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}
      {/* GUARANTEE */}
      <section
        id="guarantee"
        ref={guaranteeRefIv}
        className="py-24 px-4 sm:px-6 bg-gradient-to-br from-indigo-600 to-purple-600 text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={guaranteeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <ShieldCheck className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Ironclad Guarantee
            </h2>
            <p className="text-xl mb-6">
              If you're not thrilled with your new site or it doesn't perform,
              get your money back - no questions asked.
            </p>
            <ul className="space-y-4 text-lg mb-8 max-w-2xl mx-auto">
              <li className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>100% Satisfaction or Money Back</span>
              </li>
              <li className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Unlimited Revisions</span>
              </li>
              <li className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Performance Guarantee</span>
              </li>
            </ul>
            <p className="text-lg italic mb-6">
              "We stand behind our work 100%. Your success is our priority."
            </p>
            <motion.button
              onClick={() => setIsContactOpen(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-bold shadow-lg"
            >
              Claim Your Guarantee
            </motion.button>
          </motion.div>
        </div>
      </section>
      {/* PRICING */}
      <section id="pricing" ref={pricingRefIv} className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Flexible Pricing for Every Business
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-4">
              No upfront costs on monthly plans. Pay as you grow with unlimited
              support.
            </p>
            <p className="text-sm text-gray-600">
              12-month minimum on monthly plans. Custom quotes for larger
              projects.
            </p>
          </motion.div>
          <motion.div
            variants={cardContainer}
            initial="hidden"
            animate={pricingInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {pricingPackages.map((pkg, i) => (
              <PricingCard key={i} pkg={pkg} index={i} />
            ))}
          </motion.div>
        </div>
      </section>
      {/* COMPARISON */}
      <section
        id="comparison"
        ref={comparisonRefIv}
        className="py-24 px-4 sm:px-6 bg-gray-100"
      >
        <div className="">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={comparisonInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Why Doondzn Stands Out
            </h2>
            <p className="text-lg text-gray-700">
              Compare us to typical agencies and see the difference.
            </p>
          </motion.div>
          <ComparisonSection />
        </div>
      </section>
      {/* BLOG */}
      {/* <section id="blog" ref={blogRefIv} className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={blogInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Insights & Tips
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Latest articles on web design, SEO, marketing, and business
              growth.
            </p>
          </motion.div>
          <motion.div
            variants={cardContainer}
            initial="hidden"
            animate={blogInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </motion.div>
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700"
            >
              View All Posts <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section> */}
      {/* FAQ */}
      <section
        id="faq"
        ref={faqRefIv}
        className="py-24 px-4 sm:px-6 bg-gray-100"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Common Questions
            </h2>
            <p className="text-lg text-gray-700">
              Everything you need to know about working with us.
            </p>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-indigo-50 transition-colors"
                >
                  <span className="font-bold text-gray-900">{f.question}</span>
                  {activeFAQ === i ? (
                    <ChevronUp className="w-5 h-5 text-indigo-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-indigo-600" />
                  )}
                </button>
                <AnimatePresence>
                  {activeFAQ === i && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden border-t border-gray-200"
                    >
                      <p className="p-6 text-gray-700">{f.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 px-4 sm:px-6 bg-gradient-to-br from-indigo-600 to-purple-600 text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a custom, high-performance website that drives results. US-based
            team, proven track record.
          </p>
          <motion.button
            onClick={() => setIsContactOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-bold shadow-lg mb-4"
          >
            Contact Us
          </motion.button>
          <p className="text-lg">
            Or call: 8077688145 • Email: contact@doondzn.com
          </p>
        </div>
      </section>
      {/* CONTACT POPUP */}
     <AnimatePresence>
  {isContactOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-500 flex items-center justify-center p-6 bg-black/60 backdrop-blur-md"
      onClick={() => setIsContactOpen(false)}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gradient Header */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600" />

        {/* Close Button */}
        <button
          onClick={() => setIsContactOpen(false)}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Contact Us
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mb-6 text-center text-sm">
          Fill out the form below, and we'll get back to you within 24 hours.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div className="relative">
            <label className="absolute -top-3 left-4 bg-white px-2 text-sm font-medium text-gray-700 transition-all">
              Name *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              required
              aria-required="true"
            />
          </div>

          {/* Phone Input */}
          <div className="relative">
            <label className="absolute -top-3 left-4 bg-white px-2 text-sm font-medium text-gray-700 transition-all">
              Phone
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your phone number (optional)"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <label className="absolute -top-3 left-4 bg-white px-2 text-sm font-medium text-gray-700 transition-all">
              Email *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              required
              aria-required="true"
            />
          </div>

          {/* Message Textarea */}
          <div className="relative">
            <label className="absolute -top-3 left-4 bg-white px-2 text-sm font-medium text-gray-700 transition-all">
              Message *
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your project or inquiry..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
              required
              aria-required="true"
            />
          </div>

          {/* Error/Success */}
          {error && (
            <p className="text-red-600 text-sm text-center">{error}</p>
          )}
          {success && (
            <p className="text-green-600 text-sm text-center">
              Message sent successfully! We'll contact you soon.
            </p>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
      {/* FOOTER */}
      <footer className="py-12 px-4 sm:px-6 bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-white" />
              <span className="text-xl font-bold text-white">Doondzn</span>
            </div>
            <p>
              Custom web solutions for small businesses. US-based excellence.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Services", "Portfolio", "Pricing", "Blog", "FAQ"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  SEO
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Google Ads
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>contact@doondzn.com</li>
              <li>8077688145</li>
              <li>Best Team</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm border-t border-gray-800 pt-8">
          © 2025 Doondzn. All rights reserved.
        </div>
      </footer>
    </>
  );
}
