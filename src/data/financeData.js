export function formatMoney(num) {
  if (isNaN(num)) return '0';
  return Number(num).toLocaleString('en-US');
}

export const quizData = [
  { id: 1, name: 'Course Laptop', desc: 'Required for assignments & coding', correct: 'need' },
  { id: 2, name: 'Daily Cafe Latte', desc: 'Branded coffee treat with friends', correct: 'want' },
  { id: 3, name: 'Semester Bus Pass', desc: 'Daily commute to university', correct: 'need' },
  { id: 4, name: 'Gaming Console', desc: 'Leisure entertainment gadget', correct: 'want' }
];

export const sampleBudgetItems = [
  { name: 'Hostel / Room Share', type: 'Fixed Need', badgeClass: 'badge-fixed-need', amount: 6000, note: 'Monthly recurring accommodation' },
  { name: 'Campus Meals & Mess', type: 'Variable Need', badgeClass: 'badge-variable-need', amount: 4000, note: 'Essential daily nutrition' },
  { name: 'Weekend Cafe & Outings', type: 'Variable Want', badgeClass: 'badge-variable-want', amount: 2000, note: 'Socializing with course peers' },
  { name: 'Emergency Savings Reserve', type: 'Savings', badgeClass: 'badge-savings', amount: 2000, note: 'Safety fund for unexpected costs' }
];

export const mistakesData = [
  {
    id: 'collapseOne',
    title: '1. Impulse Buying on Flash Sales',
    body: 'Buying items immediately online without checking if they fit your plan. Solution: Apply the 48-Hour delay rule before clicking checkout.'
  },
  {
    id: 'collapseTwo',
    title: '2. Small Daily Spending Leaks',
    body: 'Daily snacks and convenience surge fares quietly add up to thousands each month. Solution: Carry a water bottle and track daily micro-costs.'
  },
  {
    id: 'collapseThree',
    title: '3. Unused Subscriptions',
    body: 'Free trials that turn into recurring bank auto-debits. Solution: Set calendar reminders to cancel trial services before the billing date.'
  },
  {
    id: 'collapseFour',
    title: '4. Spending Without an Initial Plan',
    body: 'Treating allowance day as a celebration and running short on cash before exams. Solution: Allocate your 50/30/20 proportions on day one.'
  }
];
