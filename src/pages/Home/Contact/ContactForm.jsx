import { faCircleNotch, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ContactFormContainer, InputContainer, InputGroup, Spinning, SubmitButton, SuccessErrorMessage } from './Contact.styles'

const ContactForm = () => {

    const api_key = "f1a529a7-520e-437e-a899-b1202e9dc4df"
    const { t } = useTranslation()

    const initialState = {
        email: "",
        name: "",
        message: ""
    }

    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [state, setState] = useState(initialState)

    const handleChange = (e) => {
        setState((prev) => (
            {
                ...prev,
                [e.target.name]: e.target.value
            }
        ))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setShow(false)
        const rawResponse = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    ...state,
                    access_key: api_key,
                    subject: `${state.name} - melogno.lol`
                }
            )
        });
        const content = await rawResponse.json();
        setLoading(false)
        if (content.success) {
            setState(initialState)
            setShow(true)
        } else {
            console.log("Ha ocurrido un error.")
        }
    }

    return (
        <ContactFormContainer onSubmit={handleSubmit}>
            <InputGroup>
                <label htmlFor="email">{t('email_label')}</label>
                <InputContainer>
                    <input value={state.email} onChange={handleChange} autoComplete='off' required={true} type="email" name="email" />
                </InputContainer>
            </InputGroup>
            <InputGroup>
                <label htmlFor="name">{t('emailname_label')}</label>
                <InputContainer>
                    <input value={state.name} onChange={handleChange} autoComplete='off' required={true} type="text" name="name" />
                </InputContainer>
            </InputGroup>
            <InputGroup>
                <label value={state.message} htmlFor="message">{t('emailcontent_label')}</label>
                <InputContainer>
                    <textarea value={state.message} onChange={handleChange} autoComplete='off' required={true} name="message" />
                </InputContainer>
            </InputGroup>
            <SubmitButton>
                {loading ? <Spinning><FontAwesomeIcon icon={faCircleNotch} /></Spinning> : <FontAwesomeIcon icon={faPaperPlane} />}
                
                <span>{t('sendemail_label')}</span>
            </SubmitButton>
            <SuccessErrorMessage show={show}>
                {t('success_message')}
            </SuccessErrorMessage>
        </ContactFormContainer>
    )
}

export default ContactForm