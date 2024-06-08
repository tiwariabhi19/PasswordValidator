import styled from 'styled-components'

export const Container = styled.div`
  background-color: #3c2940;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 20px;
  height: 100vh;
`

export const Title = styled.h1`
  font-size: 50px;
  color: #ffffff;
  font-family: 'Roboto';
`

export const Description = styled.p`
  font-size: 12px;
  color: #ffffff;
  font-family: 'Roboto';
  margin-bottom: 20px;
`

export const Input = styled.input`
  padding: 10px;
  font-size: 15px;
  margin-bottom: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  width: 350px;
  border-width: 0px;
`

export const Warning = styled.p`
  font-size: 16px;
  margin-top: 20px;
  color: #ff0000;
  font-family: 'Roboto';
`

export const Button = styled.button`
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  border-width: 0px;
  background-color: #06b6d4;
`
