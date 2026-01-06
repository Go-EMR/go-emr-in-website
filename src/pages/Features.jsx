import { Link } from 'react-router-dom';
import {
  FileText,
  Users,
  Calendar,
  Activity,
  Shield,
  Clock,
  CreditCard,
  Zap,
  Globe,
  WifiOff,
  Smartphone,
  BadgeCheck,
  ArrowRight,
  ClipboardList,
  Pill,
  BarChart3
} from 'lucide-react';

const features = [
  {
    category: 'ABDM Integration',
    items: [
      { icon: BadgeCheck, title: 'ABHA Creation', desc: 'Generate 14-digit ABHA numbers in-app' },
      { icon: Globe, title: 'Health Records Exchange', desc: 'HIP & HIU certified for data sharing' },
      { icon: Shield, title: 'AB-PMJAY Ready', desc: 'Pre-approved for Ayushman Bharat empanelment' },
    ]
  },
  {
    category: 'Clinical Management',
    items: [
      { icon: ClipboardList, title: 'OPD Management', desc: 'Token system, queue management, consultations' },
      { icon: FileText, title: 'E-Prescriptions', desc: 'Digital Rx with dosage & instructions' },
      { icon: Pill, title: 'Pharmacy Integration', desc: 'Connect with local pharmacies for dispensing' },
    ]
  },
  {
    category: 'Operations & Billing',
    items: [
      { icon: CreditCard, title: 'Billing & Invoicing', desc: 'GST-compliant invoices with UPI payments' },
      { icon: Calendar, title: 'Appointment Scheduling', desc: 'Online booking with automated reminders' },
      { icon: BarChart3, title: 'Reports & Analytics', desc: 'Daily, monthly, and custom reports' },
    ]
  },
  {
    category: 'Built for Bharat',
    items: [
      { icon: WifiOff, title: 'Offline Mode', desc: 'Full functionality without internet' },
      { icon: Smartphone, title: 'Hindi Interface', desc: 'Complete vernacular support' },
      { icon: Zap, title: 'Low Bandwidth', desc: 'Optimized for 2G/3G networks' },
    ]
  }
];

export default function Features() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section bg-gradient-to-b from-primary-50 to-white dark:from-dark-surface dark:to-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <span className="badge-primary mb-4">Features</span>
            <h1 className="section-title">
              Built for <span className="gradient-text">Indian Healthcare</span>
            </h1>
            <p className="section-subtitle">
              ABDM certified. Offline first. Designed for Bharat's clinics and hospitals.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      {features.map((category, idx) => (
        <section key={idx} className={`section ${idx % 2 === 1 ? 'bg-slate-50 dark:bg-dark-surface' : 'bg-white dark:bg-dark-bg'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              {category.category}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {category.items.map((item, i) => (
                <div key={i} className="feature-card">
                  <div className="icon-box mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section bg-primary-600 dark:bg-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">See GoEMR in Action</h2>
          <p className="text-primary-100 mb-8">Schedule a personalized demo for your clinic or hospital.</p>
          <Link to="/" className="btn-primary-lg bg-white text-primary-700 hover:bg-slate-100">
            Request Demo <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
