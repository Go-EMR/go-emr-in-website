import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Play,
  Shield,
  Zap,
  Users,
  FileText,
  Activity,
  Star,
  Globe,
  WifiOff,
  Smartphone,
  BadgeCheck,
  Cloud,
  Calendar,
  ClipboardList,
  Stethoscope,
  IndianRupee
} from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-dark-bg dark:via-dark-bg dark:to-dark-surface" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
                <BadgeCheck className="w-4 h-4" />
                ABDM Phase 3 Certified
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Bharat Ka{' '}
                <span className="gradient-text">Digital Health</span>{' '}
                Partner
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0">
                Complete EMR solution with ABDM integration, offline-first architecture, 
                and smart patient management. Built for Indian healthcare.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link to="/" className="btn-primary-lg">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="btn-secondary flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <span className="trust-badge">
                  <BadgeCheck className="w-4 h-4 text-primary-600" />
                  ABDM Certified
                </span>
                <span className="trust-badge">
                  <Shield className="w-4 h-4 text-primary-600" />
                  DPDP Compliant
                </span>
                <span className="trust-badge">
                  <WifiOff className="w-4 h-4 text-primary-600" />
                  Offline First
                </span>
              </div>
            </div>

            {/* Right - Dashboard Preview */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl blur-2xl" />
                
                {/* Dashboard Card */}
                <div className="relative card p-6 space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                        <Stethoscope className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white">OPD Dashboard</h3>
                        <p className="text-sm text-slate-500">Dr. Sharma's Clinic</p>
                      </div>
                    </div>
                    <span className="badge-success">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Online
                    </span>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-slate-50 dark:bg-dark-surface rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold text-primary-600">42</div>
                      <div className="text-xs text-slate-500">Today's Patients</div>
                    </div>
                    <div className="bg-slate-50 dark:bg-dark-surface rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold text-emerald-600">8</div>
                      <div className="text-xs text-slate-500">In Queue</div>
                    </div>
                    <div className="bg-slate-50 dark:bg-dark-surface rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold text-accent-600">₹24.5k</div>
                      <div className="text-xs text-slate-500">Revenue</div>
                    </div>
                  </div>

                  {/* Patient Queue */}
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">Current Queue</div>
                    {[
                      { name: 'Rajesh Kumar', token: 'T-023', time: '10:30 AM', status: 'In Consultation' },
                      { name: 'Priya Sharma', token: 'T-024', time: '10:45 AM', status: 'Waiting' },
                      { name: 'Amit Patel', token: 'T-025', time: '11:00 AM', status: 'Waiting' },
                    ].map((patient, i) => (
                      <div key={i} className={`flex items-center justify-between p-3 rounded-lg ${i === 0 ? 'bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800' : 'bg-slate-50 dark:bg-dark-surface'}`}>
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${i === 0 ? 'bg-primary-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}>
                            {patient.token.split('-')[1]}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-900 dark:text-white">{patient.name}</div>
                            <div className="text-xs text-slate-500">{patient.time}</div>
                          </div>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${i === 0 ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400'}`}>
                          {patient.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* ABHA Badge */}
                  <div className="flex items-center gap-2 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                    <BadgeCheck className="w-5 h-5 text-orange-600" />
                    <span className="text-sm text-orange-700 dark:text-orange-300">ABHA Linked: 91-XXXX-XXXX-1234</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-dark-bg border-y border-slate-100 dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '5000+', label: 'Clinics Trust Us' },
              { value: '2M+', label: 'Patients Served' },
              { value: '99.9%', label: 'Uptime' },
              { value: '4.8', label: 'User Rating', icon: Star },
            ].map((stat, i) => (
              <div key={i} className="stat-card">
                <div className="stat-value flex items-center justify-center gap-1">
                  {stat.value}
                  {stat.icon && <stat.icon className="w-6 h-6 text-yellow-500 fill-yellow-500" />}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABDM Section */}
      <section className="section bg-slate-50 dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <span className="badge-primary mb-4">
              <BadgeCheck className="w-4 h-4" /> ABDM Certified
            </span>
            <h2 className="section-title">
              Complete Ayushman Bharat Digital Mission Integration
            </h2>
            <p className="section-subtitle">
              Phase 3 certified. Ready for AB-PMJAY empanelment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                milestone: 'M1', 
                title: 'ABHA Integration', 
                desc: 'Generate & verify 14-digit ABHA numbers directly from the system',
                icon: BadgeCheck
              },
              { 
                milestone: 'M2', 
                title: 'Health Information Provider', 
                desc: 'Push patient records securely to the national health exchange',
                icon: Cloud
              },
              { 
                milestone: 'M3', 
                title: 'Health Information User', 
                desc: 'Access patient records from other ABDM-linked hospitals',
                icon: Globe
              },
            ].map((item, i) => (
              <div key={i} className="feature-card">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2 py-1 text-xs font-bold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded">
                    {item.milestone}
                  </span>
                  <div className="icon-box">
                    <item.icon className="w-5 h-5" />
                  </div>
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

      {/* Key Features */}
      <section className="section bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <h2 className="section-title">Built for Indian Healthcare</h2>
            <p className="section-subtitle">
              Features designed for the unique needs of Bharat's clinics and hospitals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: WifiOff, title: 'Offline First', desc: 'Works without internet, auto-syncs when connected' },
              { icon: Calendar, title: 'Smart Scheduling', desc: 'Token system & appointment management' },
              { icon: FileText, title: 'E-Prescriptions', desc: 'Digital Rx with pharmacy integration' },
              { icon: IndianRupee, title: 'Billing & UPI', desc: 'GST invoicing with UPI payments' },
              { icon: ClipboardList, title: 'OPD Management', desc: 'Complete outpatient workflow' },
              { icon: Users, title: 'Patient Records', desc: 'Comprehensive EMR with history' },
              { icon: Activity, title: 'Lab Integration', desc: 'Connect with diagnostic centers' },
              { icon: Smartphone, title: 'Hindi Interface', desc: 'Full vernacular language support' },
            ].map((feature, i) => (
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

      {/* Testimonial */}
      <section className="section bg-slate-50 dark:bg-dark-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl font-medium text-slate-900 dark:text-white mb-6">
            "GoEMR has transformed how we manage our clinic. The offline mode is a lifesaver in areas with poor connectivity."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold">
              SM
            </div>
            <div className="text-left">
              <div className="font-semibold text-slate-900 dark:text-white">Dr. Suresh Mehta</div>
              <div className="text-sm text-slate-500">Mehta Clinic, Jaipur</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary-600 to-primary-700 dark:from-primary-800 dark:to-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Modernize Your Practice?
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Join 5,000+ clinics across India. Start your free 14-day trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary-lg bg-white text-primary-700 hover:bg-slate-100">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/pricing" className="btn-ghost text-white hover:bg-white/10">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
