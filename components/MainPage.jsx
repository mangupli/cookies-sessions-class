const React = require('react');
const Layout = require('./Layout');
const SetCookieForm = require('./SetCookieForm');
const RegisterForm = require('./RegisterForm');

function MainPage({ user }) {
  return (
    <Layout user={user}>
      <button
        type="button"
        className="btn btn-outline-danger"
        id="show-cookie-btn"
        style={{ margin: '10px' }}
      >
        Показать все куки
      </button>
      {/*       <SetCookieForm /> */}
      {user ? (
        <>
          <p>
            Очень ОЧЕНЬ персональные данные пользователя:
            <b>{user.login}</b>
          </p>
          <iframe
            src="https://giphy.com/embed/WPozw7z6nUMrQ12Kc7"
            width="480"
            height="400"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </>
      ) : (
        <p>Зарегистрируйтесь, чтобы увидеть содержимое сайта</p>
      )}
      <script defer src="/js/setCookie.js" />
    </Layout>
  );
}

module.exports = MainPage;
