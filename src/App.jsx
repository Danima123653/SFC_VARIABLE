import React, { useState, useMemo, useEffect } from 'react';
import TopMetaBar from './components/TopMetaBar';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import HeroSection from './components/HeroSection';
import BasicsSection from './components/BasicsSection';
import NeedsWantsSection from './components/NeedsWantsSection';
import CalculatorSection from './components/CalculatorSection';
import SavingsGoalSection from './components/SavingsGoalSection';
import ExpensePlannerSection from './components/ExpensePlannerSection';
import MistakesSection from './components/MistakesSection';
import VisualLearningSection from './components/VisualLearningSection';
import ChatBotSection from './components/ChatBotSection';
import FeedbackSection from './components/FeedbackSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './style.css';

export default function App() {
  const [currency, setCurrency] = useState('Rs.');
  const [monthlyIncome, setMonthlyIncome] = useState(20000);
  const [searchTerm, setSearchTerm] = useState('');

  const [goalTitle, setGoalTitle] = useState('Course Textbook & Tablet');
  const [goalTarget, setGoalTarget] = useState(20000);
  const [goalCurrent, setGoalCurrent] = useState(5000);
  const [goalMonthly, setGoalMonthly] = useState(2500);

  const today = useMemo(() => new Date().toISOString().split('T')[0], []);
  const [expenses, setExpenses] = useState([
    { id: 1, date: '2026-09-20', category: 'Food', desc: 'Campus Lunch', amount: 350 },
    { id: 2, date: '2026-09-22', category: 'Education', desc: 'Notebooks', amount: 400 }
  ]);

  useEffect(() => {
    const handleCardClick = (e) => {
      const card = e.target.closest('.content-card, .concept-card, .pillar-card, .summary-stat-box');
      if (!card) return;
      if (['INPUT', 'SELECT', 'BUTTON', 'A', 'TEXTAREA'].includes(e.target.tagName)) return;
      card.classList.remove('card-clicked');
      void card.offsetWidth;
      card.classList.add('card-clicked');
    };
    document.addEventListener('click', handleCardClick);
    return () => document.removeEventListener('click', handleCardClick);
  }, []);

  const needs = Math.round(monthlyIncome * 0.5);
  const wants = Math.round(monthlyIncome * 0.3);
  const savings = Math.round(monthlyIncome * 0.2);

  const targetNum = parseFloat(goalTarget) || 1;
  const currentNum = parseFloat(goalCurrent) || 0;
  const monthlyNum = parseFloat(goalMonthly) || 1;
  const percent = Math.min(100, Math.max(0, Math.round((currentNum / targetNum) * 100)));
  const remaining = Math.max(0, targetNum - currentNum);
  const monthsLeft = Math.ceil(remaining / monthlyNum);
 
  const totalExpenses = useMemo(() => {
    return expenses.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
  }, [expenses]);
  const balance = monthlyIncome - totalExpenses;

  function canShow(keywords, extra = '') {
    if (!searchTerm.trim()) return true;
    const q = searchTerm.toLowerCase().trim();
    return keywords.toLowerCase().includes(q) || extra.toLowerCase().includes(q);
  }

  return (
    <React.Fragment>
      <TopMetaBar />
      <Navbar currency={currency} setCurrency={setCurrency} />

      <main className="container my-4">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <HeroSection
          isVisible={canShow('welcome budget basics student finance habits university money guide', 'Master Your Money Build Smart Habits')}
        />

        <BasicsSection
          currency={currency}
          isVisible={canShow('basics income fixed expenses variable budget rent bus pass mess allowance tuition', 'Budgeting Basics sample budget')}
        />

        <NeedsWantsSection
          isVisible={canShow('needs wants quiz lab classification 48 hour laptop latte bus gaming impulse', 'Needs vs Wants Lab Laptop Latte')}
        />

        <CalculatorSection
          currency={currency}
          monthlyIncome={monthlyIncome}
          setMonthlyIncome={setMonthlyIncome}
          needs={needs}
          wants={wants}
          savings={savings}
          isVisible={canShow('50 30 20 calculator rule split savings needs wants emergency income allowance', '50/30/20 Budget Rule Calculator')}
        />

        <div className="row g-4">
          <SavingsGoalSection
            currency={currency}
            goalTitle={goalTitle}
            setGoalTitle={setGoalTitle}
            goalTarget={goalTarget}
            setGoalTarget={setGoalTarget}
            goalCurrent={goalCurrent}
            setGoalCurrent={setGoalCurrent}
            goalMonthly={goalMonthly}
            setGoalMonthly={setGoalMonthly}
            percent={percent}
            monthsLeft={monthsLeft}
            currentNum={currentNum}
            targetNum={targetNum}
            isVisible={canShow('savings goal planner target monthly contribution tablet textbook completed', 'Savings Goal Planner target saved')}
          />

          <ChatBotSection
            isVisible={canShow('budget helper bot questions saving needs guide overspending chat assistance', 'Financial Guide Bot Ask quick questions')}
          />
        </div>

        <ExpensePlannerSection
          currency={currency}
          monthlyIncome={monthlyIncome}
          expenses={expenses}
          setExpenses={setExpenses}
          totalExpenses={totalExpenses}
          balance={balance}
          isVisible={canShow('expense planner ledger track table spending balance food transport education entertainment utilities add delete', 'Expense Planner Demonstration balance remaining')}
        />

        <MistakesSection
          isVisible={canShow('mistakes impulse buying leak subscriptions spending without plan flash sales trials', 'Common Student Money Mistakes')}
        />

        <VisualLearningSection
          isVisible={canShow('infographics visual cards 50 30 20 challenge cycle value filter', 'Visual Learning Cards 50/30/20 Ratio')}
        />

        <div className="row g-4 mt-1">
          <FeedbackSection
            isVisible={canShow('feedback rating review student comments evaluation', 'Feedback Form Full Name Student Email')}
          />

          <ContactSection
            isVisible={canShow('contact support email message suggestions desk', 'Contact Us Suggestions project desk')}
          />
        </div>
      </main>

      <Footer />
    </React.Fragment>
  );
}
