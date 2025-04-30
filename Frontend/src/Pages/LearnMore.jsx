/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'
import CodeDisplay from '../Components/CodeDisplay'
import { codeExamples } from '../Components/CodeExamples'
import GithubIcon from '../Components/Icons/github-icon'
import LinkedinIcon from '../Components/Icons/linked-icon'
import '../Styles/LearnMore.css'

export default function LearnMore() {
  return (
    <>
      <main className="main-container">
        <article>
          <section className="intro-section">
            <h1 className="main-heading">Big O Notation</h1>
            <p>Big O notation is a tool used to evaluate the performance and efficiency of an algorithm...</p>
            <p>In simpler terms, Big O notation informs us about the speed of an algorithm as the amount of data it needs to process increases...</p>
            <p>Big O notation is typically represented by a function that describes the algorithm's worst-case time complexity...</p>

            <div className="button-wrapper">
              <Link to='/' className="calculate-button">Calculate Big O</Link>
            </div>
          </section>

          <section className="info-section">
            <h3 className="sub-heading">Why do we need it?</h3>
            <p>We need Big O notation for several reasons:</p>
            <ul>
              <li>Provides a standardized way to describe performance in terms of input size.</li>
              <li>Helps compare different algorithms and pick the best one.</li>
              <li>Identify optimization areas.</li>
            </ul>
          </section>

          <section className="info-section">
            <h3 className="sub-heading">Complexity</h3>
            <p>Understanding time and space complexity is critical for designing and analyzing algorithms...</p>

            <section>
              <h4 className="small-heading">Time Complexity</h4>
              <p>Time complexity refers to the amount of time it takes for an algorithm to run.</p>
              <p>Example: O(n) means the running time grows linearly with input size.</p>
            </section>

            <section>
              <h4 className="small-heading">Space Complexity</h4>
              <p>Space complexity refers to the memory an algorithm needs to execute.</p>
              <p>Example: O(n) memory grows linearly with input size.</p>
            </section>

            {/* Complexities */}
            <section className="example-section">
              <h4 className="small-heading">O(1) - Constant</h4>
              <p>Constant time algorithms always take the same amount of time.</p>
              <p>Example: Array access, hash table lookup.</p>
              <CodeDisplay code={codeExamples.constant} language='python' />
            </section>

            <section className="example-section">
              <h4 className="small-heading">O(log n) - Logarithmic</h4>
              <p>Logarithmic time algorithms grow slower than input size.</p>
              <p>Example: Binary search.</p>
              <CodeDisplay code={codeExamples.logarithmic} language='python' />
            </section>

            <section className="example-section">
              <h4 className="small-heading">O(n) - Linear</h4>
              <p>Linear time algorithms grow proportionally to input size.</p>
              <p>Example: Linear search.</p>
              <CodeDisplay code={codeExamples.linear} language='python' />
            </section>

            <section className="example-section">
              <h4 className="small-heading">O(n log n) - Log-Linear</h4>
              <p>Example: Merge Sort, Heap Sort.</p>
              <CodeDisplay code={codeExamples.logLinear} language='python' />
            </section>

            <section className="example-section">
              <h4 className="small-heading">O(n²) - Quadratic</h4>
              <p>Example: Bubble Sort, Insertion Sort.</p>
              <CodeDisplay code={codeExamples.quadratic} language='python' />
            </section>

            <section className="example-section">
              <h4 className="small-heading">O(2ⁿ) - Exponential</h4>
              <p>Example: Traveling Salesman Problem.</p>
              <CodeDisplay code={codeExamples.exponential} language='python' />
            </section>

            <section className="example-section">
              <h4 className="small-heading">O(n!) - Factorial</h4>
              <p>Example: Brute-force permutations.</p>
              <CodeDisplay code={codeExamples.factorial} language='python' />
            </section>
          </section>
        </article>
      </main>

      <footer className="footer">
        <section className="footer-content">
          <div className="line" />
          <div className="social-icons">
            <a href="https://github.com/Mathesh07"><GithubIcon /></a>
            <a href="https://www.linkedin.com/in/matheshwaran-k/"><LinkedinIcon /></a>
          </div>
          <div className="line" />
        </section>
      </footer>
    </>
  )
}
