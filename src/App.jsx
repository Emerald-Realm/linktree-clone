import './App.css'
import Link from './components/Link'
import profile from '../public/Profile.png'
import slack from '../public/slack.png'
import github from '../public/Social.png'
import internship from '../public/Zuri.Internship_Logo.png'
import ig from '../public/I4G.png'

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
    link: 'https://books.zuri.team/python-for-beginners?ref_id=temple-lead',
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
          <img id="profile__img" src={profile} />
          <h3>Praise Oyegoke</h3>
          <div className='links'>
            {
              btnLinks.map((btn) => <Link key={btn.text} bundled={btn} />)
            }

          </div>
          <div className='icons'>
            <a href="">
              <img className='logo' src={slack} />
            </a>
            <a href="https://github.com/Emerald-Realm">
              <img className='logo' src={github} />
            </a>
          </div>
        </div>

        <footer>
          <img className='logo' src={internship} />
          <p>HNG Internship 9 frontend Task</p>
          <img className='logo' src={ig} />
        </footer>
      </div>

    </main>
  )
}
