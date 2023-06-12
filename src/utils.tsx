interface ObjLogin {
  email: string
  password: string
}

export function login({ email, password }: ObjLogin) {
  const delay = (0.7 + Math.random() * 2) * 1000

  return new Promise<string | void>((resolve, reject) => {
    setTimeout(function () {
      if (password === 'password123' && !!email) {
        resolve()
      } else {
        reject({ message: 'e-mail or password wrong.' })
      }
    }, delay)
  })
}
