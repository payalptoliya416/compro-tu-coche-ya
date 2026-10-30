import { images } from './images';

export const nav = [
  { label: 'Sell Your Car', href: '/sell-your-car' },
  { label: 'About Us', href: '/about-us' },
  { label: 'How does it work?', href: '/how-it-works' },
  { label: 'Easy Pickup', href: '/easy-pickup' },
];

export const contact = {
  phone: '+34 900 000 000',
  email: 'hello@comprotucochoya.es',
  place: 'Spain',
};

export const faqs = [
  { q: 'How much is my car worth?', a: "Your car's value depends on its make, model, year, mileage, and condition. Enter your license plate number for a free, instant valuation." },
  { q: 'Is the assessment free?', a: 'Yes. The assessment is 100% free and comes with no commitment.' },
  { q: 'How long does the process take?', a: 'Your valuation takes just a few minutes. Once you accept, we arrange the paperwork and collection at a time that suits you.' },
  { q: 'When will I receive payment?', a: 'Once the handover and paperwork are completed, payment is made quickly and securely into your bank account.' },
  { q: 'What documentation do I need?', a: "Your ID, the vehicle's registration documents and the latest tax payment receipt. Our team helps you with the rest." },
  { q: 'Do you buy financed cars?', a: 'Yes. We handle the cancellation of the loan as part of the process.' },
  { q: 'Do you buy cars without a valid MOT/vehicle inspection certificate?', a: "Yes. A missing or expired inspection certificate isn't a problem for us." },
  { q: 'Are you picking up the car?', a: 'Yes. Collection is free anywhere in Spain, at a time that suits you.' },
];

export const testimonials = [
  { text: 'Incredible experience. They offered me a fair price and I had the money in my account in less than 48 hours. Highly recommended.', name: 'Annette Black', city: 'Valencia', avatar: images.avatar1 },
  { text: "I had the car financed and didn't know how to manage it. They took care of everything. No stress, no complications. Perfect.", name: 'Leslie Alexander', city: 'Madrid', avatar: images.avatar2 },
  { text: 'The process is very simple. I entered the license plate number, received a valuation, and sold my car the same day. Very professional.', name: 'Esther Howard', city: 'Sevilla', avatar: images.avatar3 },
  { text: 'Incredible experience. They offered me a fair price and I had the money in my account in less than 48 hours. Highly recommended.', name: 'Annette Black', city: 'Valencia', avatar: images.avatar1 },
  { text: "I had the car financed and didn't know how to manage it. They took care of everything. No stress, no complications. Perfect.", name: 'Leslie Alexander', city: 'Madrid', avatar: images.avatar2 },
  { text: 'The process is very simple. I entered the license plate number, received a valuation, and sold my car the same day. Very professional.', name: 'Esther Howard', city: 'Sevilla', avatar: images.avatar3 },
];

export const stats = [
  { value: '+30', label: 'Cars purchased' },
  { value: '+15 years', label: 'Experience' },
  { value: '20 days', label: 'Middle process' },
  { value: '4.9/5', label: 'Customer reviews' },
];

export const whyItems = [
  { icon: 'lucide:clipboard-check', title: 'Fair Assessment', text: 'Understand the value of your vehicle with a clear and professional assessment.' },
  { icon: 'lucide:layers', title: 'No Unnecessary Complications', text: 'We keep the process simple from the first step to the final handover.' },
  { icon: 'lucide:zap', title: 'Fast & Secure', text: 'Move through the process quickly with secure communication and payment.' },
  { icon: 'lucide:headset', title: 'Complete Support', text: 'We help you throughout the process, including documentation and vehicle collection.' },
];

export const registrationSteps = [
  { title: 'Registration', text: 'Enter your vehicle registration to get started.' },
  { title: 'Your Car', text: 'Tell us about your vehicle, including its make, model and condition.' },
  { title: 'Condition', text: 'Share your contact details so our team can get in touch.' },
  { title: 'Assessment', text: 'Receive your vehicle assessment and move forward with confidence.' },
];

export const pickupSteps = [
  { title: 'Choose Your Location', text: 'Tell us where your car is located - home, office, or anywhere else in Spain.' },
  { title: 'Select a Convenient Time', text: 'Choose a pickup time that works for you, including evenings and weekends.' },
  { title: 'We Collect Your Car', text: 'Our professional team arrives at the agreed location, on time and fully prepared.' },
  { title: 'Handover Made Simple', text: 'Complete the paperwork on the spot and let us handle everything else.' },
];
