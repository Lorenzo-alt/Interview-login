import { useState } from 'react'
import styles from './App.module.scss'
import { login } from './utils'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [isRequesting, setIsRequesting] = useState(false)

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setEmail(value)
  }
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setPassword(value)
  }

  const handleSubmit = () => {
    setError(null)
    setIsRequesting(true)

    const values = { email: email, password: password }
    login(values)
      .then(() => {
        alert('Login feito com sucesso !! ✅')
      })
      .catch((error) => {
        console.log(error)
        setError(error.message)
      })
      .finally(() => {
        setIsRequesting(false)
      })
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles['login-form']}>
        <h1>Login 💻</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        {error && <div className={styles.errorMessage}>{error}</div>}
        <div className={styles.row}>
          <label htmlFor={'email'}>Email</label>
          <input
            id={'email'}
            type={'email'}
            autoComplete='off'
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor={'password'}>Senha</label>
          <input
            id={'password'}
            type={'password'}
            value={password}
            onChange={handlePassword}
          />
        </div>

        <div className={styles.button}>
          <button
            onClick={handleSubmit}
            disabled={email === '' || password.length < 6 || isRequesting}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
