import { Shield, Lock, Eye, Server, CheckCircle, Globe, BadgeCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const certifications = [
  { name: 'ABDM Phase 3', desc: 'M1, M2, M3 milestones certified' },
  { name: 'DPDP Act 2023', desc: 'Data protection compliant' },
  { name: 'ISO 27001', desc: 'Information security certified' },
  { name: 'Data Localization', desc: 'All data stored in India' },
];

const features = [
  { icon: Lock, title: 'AES-256 Encryption', desc: 'Bank-grade encryption for all data' },
  { icon: Eye, title: 'Audit Logging', desc: 'Complete activity tracking' },
  { icon: Server, title: 'Indian Data Centers', desc: 'AWS Mumbai & Hyderabad regions' },
  { icon: Shield, title: 'Consent Management', desc: 'ABDM compliant consent flow' },
];

export default function Security() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section bg-gradient-to-b from-primary-50 to-white dark:from-dark-surface dark:to-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <span className="badge-success mb-4">
              <Shield className="w-4 h-4" /> Trust Center
            </span>
            <h1 className="section-title">
              Secure & Compliant
            </h1>
            <p className="section-subtitle">
              ABDM certified. DPDP compliant. Your data stays in India.
            </p>
          </div>

          {/* Certifications */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {certifications.map((cert, i) => (
              <div key={i} className="card p-4 text-center">
                <CheckCircle className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm">{cert.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="section bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Security Infrastructure
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="feature-card text-center">
                <div className="icon-box mx-auto mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABDM Compliance */}
      <section className="section bg-slate-50 dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-8 md:flex items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <BadgeCheck className="w-10 h-10 text-orange-600" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">AB-PMJAY Ready</h3>
                  <p className="text-slate-500">Pre-approved for Ayushman Bharat empanelment</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                GoEMR is fully certified for ABDM integration and ready for AB-PMJAY hospital empanelment. 
                Our team can assist with the complete empanelment process.
              </p>
            </div>
            <Link 
              to="/"
              className="btn-primary mt-4 md:mt-0 whitespace-nowrap"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
