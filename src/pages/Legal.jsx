import { Link } from 'react-router-dom'

// /privacy and /terms. Linked from sign-up (age + terms checkbox) and the footer.
const UPDATED = '24 October 2026'
const CONTACT = 'abakahjoshua358@gmail.com'

function Section({ title, children }) {
  return (
    <section className="legal-section">
      <h2>{title}</h2>
      {children}
    </section>
  )
}

function Privacy() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p className="legal-updated">Last updated {UPDATED}</p>
      <Section title="Who we are">
        <p>Finance Tracker is a personal income and expense tracker built by Abakah Joshua. Your account is the same account used by Nsoro and GH-GPT. Questions: <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.</p>
      </Section>
      <Section title="What we collect">
        <ul>
          <li><strong>Account details:</strong> your name, username, email address and a hashed password, or your Google name, email and photo if you sign in with Google.</li>
          <li><strong>Your transactions:</strong> the income and expense entries you add (amount, category, description and date). Only you can see them.</li>
        </ul>
        <p>We don&apos;t sell your data, show ads, or use tracking cookies. Your sign-in session is kept in your browser&apos;s local storage.</p>
      </Section>
      <Section title="Where it is stored">
        <p>Data is stored in a MongoDB Atlas database and served from Render, over HTTPS. Passwords are hashed.</p>
      </Section>
      <Section title="Your choices">
        <p>Delete any transaction at any time. To delete your account, use <strong>Delete account</strong> in Nsoro&apos;s settings (it is the same account), or email <a href={`mailto:${CONTACT}`}>{CONTACT}</a> from your account&apos;s email address.</p>
      </Section>
      <Section title="Children">
        <p>You must be 13 or older to create an account. We delete accounts we learn belong to children under 13.</p>
      </Section>
    </>
  )
}

function Terms() {
  return (
    <>
      <h1>Terms of Use</h1>
      <p className="legal-updated">Last updated {UPDATED}</p>
      <Section title="Using Finance Tracker">
        <p>Finance Tracker is free and provided as it is. By creating an account you agree to these terms and our <Link to="/privacy">Privacy Policy</Link>. You must be <strong>13 or older</strong>; if you are under 18, use it with a parent&apos;s or guardian&apos;s permission.</p>
      </Section>
      <Section title="Not financial advice">
        <p>Finance Tracker only records the numbers you enter. It doesn&apos;t give financial advice; check important figures yourself.</p>
      </Section>
      <Section title="Your account">
        <p>Keep your password private. Don&apos;t try to access other people&apos;s data or disrupt the service. We may suspend accounts that do. We may change, pause or stop features at any time.</p>
      </Section>
      <Section title="Contact">
        <p><a href={`mailto:${CONTACT}`}>{CONTACT}</a></p>
      </Section>
    </>
  )
}

function Legal({ page = 'privacy' }) {
  return (
    <div className="legal-page">
      <div className="card legal-card">{page === 'terms' ? <Terms /> : <Privacy />}</div>
    </div>
  )
}

export default Legal
