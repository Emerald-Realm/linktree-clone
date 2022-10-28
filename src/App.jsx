import './App.css'
import Link from './components/Link'
import Social from './components/Social'

export default function App() {


  let twitter = {
    id: 'twitter',
    link: 'https://twitter.com/OyegokePraise',
    text: 'twitter'
  }
  let training = {
    id: 'btn__zuri',
    link: 'https://training.zuri.team/',
    text: 'Zuri Training'
  }
  let books = {
    id: 'books',
    link: 'http://books.zuri.team/',
    text: 'Zuri Books'
  }
  let python = {
    id: 'book_python',
    link: 'https://books.zuri.team/python-for-beginners?ref_id=praise',
    text: 'Get Python for Beginners'
  }
  let background = {
    id: 'pitch',
    link: 'https://background.zuri.team/',
    text: 'Background check on coders'
  }
  let book = {
    id: 'book__design',
    link: 'https://books.zuri.team/design-rules',
    text: 'Book design'
  }

  let btnLinks = [twitter, training, books, python, background, book]

  return (
    <main>
      <div className='inner'>
        <div>
          <img id="profile__img" src="../public/Profile%20pic%20.png" />
          <h3>Praise Oyegoke</h3>
          <div className='links'>
            {
              btnLinks.map((btn) => <Link key={btn.text} bundled={btn} />)
            }

          </div>
          <div className='icons'>
            <a href="">
              <img className='logo' src='../public/slack.png' />
            </a>
            <a href="https://github.com/Emerald-Realm">
              <img className='logo' src='../public/Social%20icon.png' />
            </a>
          </div>
        </div>

        <footer>
          <img className='logo' src='../public/Zuri.Internship_Logo.png' />
          <p>HNG Internship 9 frontend Task</p>
          <img className='logo' src='../public/I4G.png' />
        </footer>
      </div>

    </main>
  )
}
