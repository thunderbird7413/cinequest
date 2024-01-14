import React from 'react'
import "./Help.css"
export default function Help() {
  return (
    <div className = "Help_Section">
      <header>
        <h1>CineQuest Help Section</h1>
    </header>

    <section>
        <h2>Getting Started</h2>
        <p>1. <a href="#">How to Sign Up/Log In</a></p>
        <p>2. <a href="#">Browsing Movies</a></p>
        <p>3. <a href="#">Watching Movies</a></p>
    </section>

    <section>
        <h2>Account Management</h2>
        <p>1. <a href="#">Profile Settings</a></p>
        <p>2. <a href="#">Subscription Plans</a></p>
        <p>3. <a href="#">Viewing History</a></p>
    </section>

    <section>
        <h2>Technical Support</h2>
        <p>1. <a href="#">Troubleshooting</a></p>
        <p>2. <a href="#">Contact Support</a></p>
    </section>

    <section>
        <h2>FAQs</h2>
        <p>1. <a href="#">Can I download movies for offline viewing?</a></p>
        <p>2. <a href="#">Are subtitles available for movies?</a></p>
        <p>3. <a href="#">How often is the movie library updated?</a></p>
    </section>

    <section>
        <h2>Community and Feedback</h2>
        <p>1. <a href="#">Community Forums</a></p>
        <p>2. <a href="#">Feedback</a></p>
    </section>

    <footer>
        Follow us on <a href="#">Facebook</a>, <a href="#">Twitter</a>, and <a href="#">Instagram</a>.
    </footer>
    </div>
  )
}
