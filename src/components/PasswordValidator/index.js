import {useState} from 'react'
import {Container, Title, Description, Input, Warning} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const [label, setLabel] = useState(
    'Your password must be at least 8 characters',
  )

  const handlePasswordChange = event => {
    const newPassword = event.target.value
    setPassword(newPassword)
    if (newPassword.length >= 8) {
      setLabel('')
    } else {
      setLabel('Your password must be at least 8 characters')
    }
  }

  return (
    <Container>
      <Title>Password Validator</Title>
      <Description>Check how strong and secure is your password</Description>
      <Input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handlePasswordChange}
      />
      {label && <Warning>{label}</Warning>}
    </Container>
  )
}

export default PasswordValidator
