import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DataDashboard from './components/DataDashboard'
import IndustrySolutions from './components/IndustrySolutions'
import Features from './components/Features'
import ProductTabs from './components/ProductTabs'
import ComparisonTable from './components/ComparisonTable'
import Certification from './components/Certification'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-minimal-white font-sans antialiased">
        <Navbar />
        <main>
          <Hero />
          <DataDashboard />
          <IndustrySolutions />
          <Features />
          <ProductTabs />
          <ComparisonTable />
          <Certification />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
