import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpgradePremium = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [isLoading, setIsLoading] = useState(false);
  
  const plans = {
    monthly: {
      price: '9,99 €',
      period: 'mois',
      savings: null,
    },
    yearly: {
      price: '99,99 €',
      period: 'an',
      savings: 'Économisez 20%',
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulation d'un paiement réussi
    setTimeout(() => {
      console.log(`Upgraded to premium with ${selectedPlan} plan`);
      setIsLoading(false);
      navigate('/profile');
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-serif font-bold mb-8">Passer à Premium</h1>
      
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
        <div className="p-8">
          <h2 className="text-2xl font-serif font-bold mb-6">Choisissez votre plan</h2>
          
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            {/* Plan mensuel */}
            <div 
              className={`flex-1 border-2 rounded-xl p-6 cursor-pointer transition-all ${
                selectedPlan === 'monthly' 
                  ? 'border-primary-500 bg-primary-50' 
                  : 'border-gray-200 hover:border-primary-200'
              }`}
              onClick={() => setSelectedPlan('monthly')}
            >
              <div className="flex items-center mb-4">
                <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                  selectedPlan === 'monthly' ? 'border-primary-500' : 'border-gray-300'
                }`}>
                  {selectedPlan === 'monthly' && (
                    <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                  )}
                </div>
                <h3 className="text-lg font-medium">Mensuel</h3>
              </div>
              <p className="text-3xl font-bold mb-1">{plans.monthly.price}<span className="text-sm font-normal">/{plans.monthly.period}</span></p>
              <p className="text-secondary-600 mb-4">Facturé mensuellement</p>
              <ul className="text-secondary-700 space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Critiques illimitées
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Recommandations personnalisées
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Pas de publicités
                </li>
              </ul>
            </div>
            
            {/* Plan annuel */}
            <div 
              className={`flex-1 border-2 rounded-xl p-6 cursor-pointer transition-all ${
                selectedPlan === 'yearly' 
                  ? 'border-primary-500 bg-primary-50' 
                  : 'border-gray-200 hover:border-primary-200'
              }`}
              onClick={() => setSelectedPlan('yearly')}
            >
              <div className="flex items-center mb-4">
                <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                  selectedPlan === 'yearly' ? 'border-primary-500' : 'border-gray-300'
                }`}>
                  {selectedPlan === 'yearly' && (
                    <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                  )}
                </div>
                <h3 className="text-lg font-medium">Annuel</h3>
                {plans.yearly.savings && (
                  <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    {plans.yearly.savings}
                  </span>
                )}
              </div>
              <p className="text-3xl font-bold mb-1">{plans.yearly.price}<span className="text-sm font-normal">/{plans.yearly.period}</span></p>
              <p className="text-secondary-600 mb-4">Facturé annuellement</p>
              <ul className="text-secondary-700 space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Critiques illimitées
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Recommandations personnalisées
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Pas de publicités
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Support prioritaire
                </li>
              </ul>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            <h3 className="text-xl font-serif font-bold mb-4">Informations de paiement</h3>
            
            <div className="space-y-4 mb-6">
              <div>
                <label htmlFor="cardName" className="block text-sm font-medium text-secondary-700 mb-1">
                  Nom sur la carte
                </label>
                <input
                  type="text"
                  id="cardName"
                  className="input"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium text-secondary-700 mb-1">
                  Numéro de carte
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  className="input"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiry" className="block text-sm font-medium text-secondary-700 mb-1">
                    Date d'expiration
                  </label>
                  <input
                    type="text"
                    id="expiry"
                    className="input"
                    placeholder="MM/AA"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="cvc" className="block text-sm font-medium text-secondary-700 mb-1">
                    CVC
                  </label>
                  <input
                    type="text"
                    id="cvc"
                    className="input"
                    placeholder="123"
                    required
                  />
                </div>
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn btn-primary py-3 flex justify-center"
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                `S'abonner pour ${selectedPlan === 'monthly' ? plans.monthly.price : plans.yearly.price}`
              )}
            </button>
            
            <p className="text-sm text-secondary-500 mt-4 text-center">
              Vous pouvez annuler votre abonnement à tout moment.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpgradePremium;